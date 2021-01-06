import data from "./data.js";

const $template = document.createElement('template');
$template.innerHTML= /*html*/ `
    <style>
        
    </style>


    <div id="input-component">
        <div id="category">
        </div>
        <div id="type">
        </div>
        <div id="difficulty">
        </div>
        <div id="question">
        </div>
    </div>
`;
export default class InputComponent extends HTMLElement{
    constructor(category, type, difficulty, question) {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        this.$inputComponent = this.shadowRoot.getElementById('input-component');
        this.$category = this.shadowRoot.getElementById('category');
        this.$type = this.shadowRoot.getElementById('type');
        this.$difficulty = this.shadowRoot.getElementById('difficulty');
        this.$question = this.shadowRoot.getElementById('question');

        this.setAttribute('category', category)
        this.setAttribute('type', type);
        this.setAttribute('difficulty', difficulty);
        this.setAttribute('question', question);
    }
    static get observedAttributes () {
        return ['category', 'type', 'difficulty', 'question'];
    }

    attributeChangedCallback (attrName, oldValue, newValue) {
        switch(attrName) {
            case 'category': 
                this.$category.innerHTML = newValue;
                break;

            case 'type':
                this.$type.innerHTML = newValue;
                break;
        
            case 'difficulty':
                this.$difficulty.innerHTML = newValue;

            case 'question':
                this.$question.innerHTML = newValue;

        }
    }
}

window.customElements.define('input-component', InputComponent);