import {storageList} from "./constants/storage-list.js";
import {defaultPassword} from "./generators/defaultPassword.js";

createForm().catch(console.error);

async function createForm() {
    const form = document.getElementById('form');
    await addInputField(form, storageList.DEFAULT_PASSWORD.title, storageList.DEFAULT_PASSWORD.name)
}

async function addInputField(form, fieldTitle, fieldName) {
    const input = document.createElement('input');
    input.name = fieldName;
    input.value = await defaultPassword();
    input.addEventListener('input', (event) => {
        handleInput(event).catch(console.error);
    });

    const span = document.createElement('span');
    span.textContent = fieldTitle;

    const div = document.createElement('div');
    div.appendChild(input);
    div.appendChild(span);
    form.appendChild(div);
}

async function handleInput(event) {
    const input = event.target;
    const fieldName = input.name;

    let options = await chrome.storage.sync.get();
    options[fieldName] = input.value;
    await chrome.storage.sync.set(options);
}