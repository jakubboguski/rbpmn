import React, { useEffect, useRef, useState } from "react";
import Modeler from "../../bpmn/modeler";
import extensions from "../../bpmn/extensions";

const Creator = ({ diagram, setDiagram }) => {
  const containerRef = useRef();
  const [modeler, setModeler] = useState();

  useEffect(() => {
    async function instantinateModeler() {
      try {
        setModeler(
          await new Modeler(containerRef.current, extensions).initialize()
        );
      } catch (ex) {
        console.log("Oops", ex);
      }
    }

    instantinateModeler();
  }, [containerRef]);

  useEffect(() => {
    async function displayDiagram() {
      await modeler.importXML(diagram);
      const canvas = modeler.get("canvas");
      canvas.zoom("fit-viewport");
    }
    if (modeler) {
      displayDiagram();
    }
  }, [modeler, diagram]);

  const save = async () => {
    const { xml } = await modeler.saveXML();
    console.log("Raw XML", xml);
    setDiagram(xml);
  };

  return (
    <>
      <button onClick={save}>Save</button>
      <div ref={containerRef}>
        <div id="hint" className="panel">
          You have unsaved changes
        </div>
      </div>
    </>
  );
};

export default Creator;
