import React, { useContext, useState } from "react";
import { ModelContext } from "../../contexts/Model.context";
import Viewer from "../../components/Viewer";
import Creator from "../../components/Creator";

const Home = () => {
  const { diagram, setDiagram } = useContext(ModelContext);
  const [loadCreator, setLoadCreator] = useState(false);

  return (
    <div className="page">
      <h1>Diagram</h1>
      <p>This is how it looks!</p>
      <button
        onClick={() => {
          setLoadCreator(!loadCreator);
        }}
      >
        {!loadCreator ? "Turn On Creator" : "Turn Off Creator"}
      </button>
      {loadCreator ? (
        <Creator
          diagram={diagram}
          setDiagram={setDiagram}
          onDiagramSave={(data) => console.log("to save", data)}
        />
      ) : (
        <Viewer diagram={diagram} />
      )}
    </div>
  );
};

export default Home;
