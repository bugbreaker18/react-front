function customRender(reactElement, mainContainer) {
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute("href", reactElement.props.href)
    domElement.setAttribute("target", reactElement.props.target)
    mainContainer.appendChild(domElement);
    */
   const domElement = document.createElement(reactElement.type)
   domElement.innerHTML = reactElement.children;
   const props = reactElement.props;
   for (const prop in props) {
        if (props === "children") continue 
        domElement.setAttribute(prop, props[prop])
   }
   mainContainer.appendChild(domElement)
}

const reactElement = {
    type: "a", 
    props: {
        target: '_blank', 
        href: "https://google.com",
    }, 
    children: "Click here to visit google"
}

const mainContainer = document.getElementById("root")

customRender(reactElement, mainContainer)