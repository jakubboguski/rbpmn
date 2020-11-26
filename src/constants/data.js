const xml = `<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn">
  <bpmn:process id="Process_1" isExecutable="false">
    <bpmn:startEvent id="StartEvent_1">
      <bpmn:outgoing>SequenceFlow_0b6cm13</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:task id="Task_0zlv465" name="foo">
      <bpmn:incoming>SequenceFlow_0b6cm13</bpmn:incoming>
      <bpmn:outgoing>SequenceFlow_17w8608</bpmn:outgoing>
    </bpmn:task>
    <bpmn:sequenceFlow id="SequenceFlow_0b6cm13" sourceRef="StartEvent_1" targetRef="Task_0zlv465" />
    <bpmn:endEvent id="EndEvent_09arx8f">
      <bpmn:incoming>SequenceFlow_17w8608</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="SequenceFlow_17w8608" sourceRef="Task_0zlv465" targetRef="EndEvent_09arx8f" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
      <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1">
        <dc:Bounds x="173" y="188" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="146" y="224" width="90" height="20" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Task_0zlv465_di" bpmnElement="Task_0zlv465" jb:dirty="true">
        <dc:Bounds x="264" y="303" width="100" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_0b6cm13_di" bpmnElement="SequenceFlow_0b6cm13">
        <di:waypoint xsi:type="dc:Point" x="209" y="206" />
        <di:waypoint xsi:type="dc:Point" x="237" y="206" />
        <di:waypoint xsi:type="dc:Point" x="237" y="343" />
        <di:waypoint xsi:type="dc:Point" x="264" y="343" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="192.5" y="110" width="90" height="20" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNShape id="EndEvent_09arx8f_di" bpmnElement="EndEvent_09arx8f" jb:dirty="true">
        <dc:Bounds x="431" y="102" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="404" y="138" width="90" height="20" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="SequenceFlow_17w8608_di" bpmnElement="SequenceFlow_17w8608">
        <di:waypoint xsi:type="dc:Point" x="364" y="343" />
        <di:waypoint xsi:type="dc:Point" x="398" y="343" />
        <di:waypoint xsi:type="dc:Point" x="398" y="120" />
        <di:waypoint xsi:type="dc:Point" x="431" y="120" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="353.5" y="110" width="90" height="20" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`;

export default xml;