import BaseRenderer from "diagram-js/lib/draw/BaseRenderer";

import { getRoundRectPath } from "bpmn-js/lib/draw/BpmnRenderUtil";

import { is } from "bpmn-js/lib/util/ModelUtil";
import { isAny } from "bpmn-js/lib/features/modeling/util/ModelingUtil";

const HIGH_PRIORITY = 1500,
  TASK_BORDER_RADIUS = 2;

export default class CustomRenderer extends BaseRenderer {
  constructor(eventBus, bpmnRenderer) {
    super(eventBus, HIGH_PRIORITY);

    this.bpmnRenderer = bpmnRenderer;
  }

  canRender(element) {
    // check if element has jb:dirty
    return true;
  }

  drawShape(parentNode, element) {
    const shape = this.bpmnRenderer.drawShape(parentNode, element);

    if (isAny(element, "jb:dirty")) {
    }

    return shape;
  }

  getShapePath(shape) {
    if (is(shape, "bpmn:Task")) {
      return getRoundRectPath(shape, TASK_BORDER_RADIUS);
    }

    return this.bpmnRenderer.getShapePath(shape);
  }
}

CustomRenderer.$inject = ["eventBus", "bpmnRenderer"];
