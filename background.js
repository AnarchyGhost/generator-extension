import { generatorList } from './constants/generator-list.js';

chrome.runtime.onInstalled.addListener(async () => {
    for (const [mnemonic, meta] of Object.entries(generatorList)) {
        chrome.contextMenus.create({
            id: mnemonic,
            title: meta.title,
            type: 'normal',
            contexts: ['editable'],
        });
    }
});

chrome.contextMenus.onClicked.addListener(async (item, tab) => {
    const mnemonic = item.menuItemId;
    chrome.scripting.executeScript({
        target: {
            tabId: tab.id
        },
        function: setValueOnWebpage,
        args: [await Promise.resolve(generatorList[mnemonic].function())],
    });
});

function setValueOnWebpage(value) {
    document.activeElement.value = value
    document.activeElement.dispatchEvent(new Event('input', {}))
}