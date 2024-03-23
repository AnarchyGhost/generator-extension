import {
    generatorConfiguration,
    generatorMap,
    isListGroup,
    type GeneratorListGroup,
    type GeneratorListItem,
} from '../generators/list';
import { setValueOnWebpage } from './utils';

export function addGeneratorsMenuItems(): void {
    chrome.runtime.onInstalled.addListener(async () => {
        addGeneratorsMenuItemsRecursively(generatorConfiguration);
    });
}

export function addGeneratorsMenuItemsRecursively(
    generators: Array<GeneratorListItem | GeneratorListGroup>,
    parentId?: string,
): void {
    generators.forEach((it) => {
        chrome.contextMenus.create({
            id: it.id,
            title: it.title,
            type: 'normal',
            parentId: parentId,
            contexts: ['editable'],
        });
        if (isListGroup(it)) {
            addGeneratorsMenuItemsRecursively(it.generatorList, it.id);
        }
    });
}

export function addOnClickForMenuItems() {
    chrome.contextMenus.onClicked.addListener(async (item, tab) => {
        if (!tab) return;
        await setValueByGeneratorName(String(item.menuItemId), tab.id);
    });
}

export function addShortcuts() {
    chrome.commands.onCommand.addListener((command) => {
        if (![...generatorMap.keys()].includes(command)) return;
        chrome.tabs.query(
            { active: true, currentWindow: true },
            async function (tabs) {
                await setValueByGeneratorName(command, tabs[0].id);
            },
        );
    });
}

async function setValueByGeneratorName(generatorName: string, tabId: number) {
    await chrome.scripting.executeScript({
        target: {
            tabId,
        },
        world: 'MAIN',
        func: setValueOnWebpage,
        args: [await generatorMap.get(generatorName).generator.generate()],
    });
}
