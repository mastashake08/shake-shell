class ShellView extends HTMLElement {
    static observedAttributes = ["color", "size"];
  
    constructor() {
      // Always call super first in constructor
      super();
      
    }
  
    connectedCallback() {
        // Create a shadow root
        const shadow = this.attachShadow({ mode: "open" });
    
        // Create spans
        const wrapper = document.createElement("span");
        wrapper.setAttribute("class", "wrapper");
    
        // Create some CSS to apply to the shadow dom
        const style = document.createElement("style");

    
        style.textContent = `
          .wrapper {
            position: relative;
          }
        `;
    
        // Attach the created elements to the shadow dom
        shadow.appendChild(style);
        shadow.appendChild(wrapper);
      }
  
    disconnectedCallback() {
      console.log("Custom element removed from page.");
    }
  
    adoptedCallback() {
      console.log("Custom element moved to new page.");
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      console.log(`Attribute ${name} has changed.`);
    }
  }

export {
    ShellView
}