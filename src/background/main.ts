import {
    generatorConfiguration,
    type GeneratorListGroup,
    type GeneratorListItem,
    generatorMap,
    isListGroup,
} from '../generators/list';
import {setValueOnWebpage} from './utils';
import {Storage} from '@plasmohq/storage';
import {getDisabledGeneratorId} from '~src/constants/StorageConstants';

export const addGeneratorsMenuItems = (): void => {
    chrome.runtime.onInstalled.addListener(async () => {
        await addGeneratorsMenuItemsRecursively(generatorConfiguration);
    });
};

export const reloadGeneratorsMenuItems = async (): Promise<void> => {
    chrome.contextMenus.removeAll();
    await addGeneratorsMenuItemsRecursively(generatorConfiguration);
};

export const addGeneratorsMenuItemsRecursively = async (
    generators: Array<GeneratorListItem | GeneratorListGroup>,
    parentId?: string,
): Promise<Array<string | number>> => {
    const storage = new Storage();
    const array = [];
    await Promise.all(generators.map(async (it) => {
        if (isListGroup(it)) {
            const contextMenu = chrome.contextMenus.create({
                id: it.id,
                title: it.title,
                type: 'normal',
                parentId: parentId,
                contexts: ['editable'],
            });
            const child = await addGeneratorsMenuItemsRecursively(it.generatorList, it.id);
            if (!child.length) {
                chrome.contextMenus.remove(contextMenu);
            } else {
                array.push(contextMenu, ...child);
            }
        } else {
            if (await storage.get<boolean>(getDisabledGeneratorId(it.id))) {
                array.push(chrome.contextMenus.create({
                    id: it.id,
                    title: it.title,
                    type: 'normal',
                    parentId: parentId,
                    contexts: ['editable'],
                }));
            }
        }
    }));
    return array;
};

export const addOnClickForMenuItems = (): void => {
    chrome.contextMenus.onClicked.addListener(async (item, tab) => {
        if (!tab) return;
        await setValueByGeneratorName(String(item.menuItemId), tab.id);
    });
};

export const addShortcuts = (): void => {
    chrome.commands.onCommand.addListener((command) => {
        if (![...generatorMap.keys()].includes(command)) return;
        chrome.tabs.query(
            {active: true, currentWindow: true},
            async function (tabs) {
                await setValueByGeneratorName(command, tabs[0].id);
            },
        );
    });
};

const setValueByGeneratorName = async (generatorName: string, tabId: number): Promise<void> => {
    await chrome.scripting.executeScript({
        target: {
            tabId,
        },
        world: 'MAIN',
        func: setValueOnWebpage,
        args: [await generatorMap.get(generatorName).generator()],
    });
};
