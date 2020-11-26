import BpmnModeler from "bpmn-js/lib/Modeler";
import customRendererModule from "../bpmn/extensions/dirtyRenderer/dirtyRenderer";

class Modeler {
  containerReference;
  modelerReference;
  extensionsConfig;
  extensions;

  constructor(container, extensionsConfig) {
    if (!container) {
      // errors
    }

    this.containerReference = container;
    this.extensionsConfig = extensionsConfig;
  }

  initialize = async () => {
    try {
      this.modelerReference = new BpmnModeler({
        container: this.containerReference,
        additionalModules: [
          {
            __init__: ["customRenderer"],
            customRenderer: ["type", customRendererModule],
          },
        ],
        moddleExtensions: {
          ...(this.extensionsConfig
            ?.filter?.((e) => e.json)
            ?.map?.((ext) => ({
              [ext.name]: ext.json,
            })) ?? []),
        },
      });

      this.extensions = this.extensionsConfig?.reduce?.((prev, ext) => {
        prev[ext.name] = ext.js;
        if (ext.js) {
          ext.js?.(this.modelerReference, this.containerReference)?.init?.();
        }
        return prev;
      }, {});

      return this.modelerReference;
    } catch (ex) {
      throw new Error(ex);
    }
  };
}

export default Modeler;
