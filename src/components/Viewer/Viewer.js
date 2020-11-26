import React from "react";
import ReactBpmn from "react-bpmn";

const Viewer = ({ diagram }) => {
  const onShown = () => {
    console.log("Shown");
  };

  const onLoading = () => {
    console.log("Loading");
  };

  const onError = () => {
    console.log("Error");
  };

  return (
    <ReactBpmn
      diagramXML={diagram}
      onShown={onShown}
      onLoading={onLoading}
      onError={onError}
    />
  );
};

export default Viewer;
