import InputComponent from "./components/InputComponent.js"
import InputWrapper from  "./components/InputWrapper.js"
import data from "./components/data.js"



let $root = document.getElementById('root');

let $inputWrapper = new InputWrapper(data);
$root.appendChild($inputWrapper);

// $root.innerHTML = `<input-component></input-component>`;