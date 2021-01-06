import InputComponent from "./InputComponent.js";
import data from "./data.js"

const $template = document.createElement('template')
$template.innerHTML = /*html*/ `
        <style>
            
        </style>
        <input-component></input-component>

        <div id="input-wrapper">
        </div>
 
`;

export default class InputWrapper extends HTMLElement{
    constructor(data) {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        this.$inputWrapper= this.shadowRoot.getElementById('input-wrapper');

        this.setAttribute('data', JSON.stringify(data));
       
    }
    static get observedAttributes () {
        return ['data'];
    }

    attributeChangedCallback (attrName, oldValue, newValue) {
        if(attrName == 'data') {
            let data = JSON.parse(newValue);
            for(let item of data) {
                let $inputComponent = new InputComponent();
                $inputComponent.setAttribute('category', item.category);
                $inputComponent.setAttribute('type', item.type);
                $inputComponent.setAttribute('difficulty', item.difficulty);
                $inputComponent.setAttribute('question', item.question);
                this.$inputWrapper.appendChild($inputComponent);
            }
        }
        
    }
}



window.customElements.define('input-wrapper', InputWrapper);