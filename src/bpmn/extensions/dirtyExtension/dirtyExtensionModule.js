const dirtyExtensionModule = (modelerReference, containerReference) => {
  const modeling = modelerReference.get("modeling");
  const eventBus = modelerReference.get("eventBus");
  const elementRegistry = modelerReference.get("elementRegistry");

  const init = () => {
    setDirtyListener();
  };

  const setDirtyListener = () => {
    eventBus.on("drag.end", 1500, (event) => {
      const hint = containerReference.querySelector("#hint");
      event.originalEvent.preventDefault();
      event.originalEvent.stopPropagation();

      const element = event?.shape;

      modeling.updateProperties(elementRegistry.get(element.id), {
        "jb:dirty": true,
      });
      modeling.setColor(elementRegistry.get(element.id), {
        fill: "#ffff00",
        stroke: "#000",
      });

      hint.style.visibility = "visible";
    });
  };

  return {
    init,
  };
};

export default dirtyExtensionModule;
