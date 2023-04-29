const ReactDom = {
  createRoot: (rootHTMLElement) => {
    return {
      render: (reactElem) => {
        if (typeof reactElem === "String" || typeof reactElem === "number")
        // const elem = document.createElement("div");
        rootHTMLElement.textContent = reactElem;

        // elem.textContent = "placeholder";
        // rootHTMLElement.append(elem);
      }
    }
  }
}

export default ReactDom;