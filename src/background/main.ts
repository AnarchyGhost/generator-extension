import {
    generatorConfiguration,
    type GeneratorListGroup,
    type GeneratorListItem,
    generatorMap,
    isListGroup,
} from '../generators/list';
import { setValueOnWebpage } from './utils';
import { Storage } from '@plasmohq/storage';
import { getDisabledGeneratorId, StorageConstants } from '~src/constants/StorageConstants';

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
        await setValueByGeneratorId(String(item.menuItemId), tab.id);
    });
};

export interface HotkeyInfo {
    name: string,
    shortcut: string,
}

export const reloadHotkeys = async () => {
    const storage = new Storage();
    const commands = await chrome.commands.getAll();
    await storage.set(StorageConstants.HOTKEY_KEYS, commands.filter((it) => it.name !== '_execute_action').map(it => (
        {
            name: it.name,
            shortcut: it.shortcut,
        }
    )));
};


export const addShortcuts = (): void => {
    chrome.commands.onCommand.addListener(async (command) => {
        const storage = new Storage();
        const generatorId = await storage.get(command);
        if (![...generatorMap.keys()].includes(generatorId)) return;
        chrome.tabs.query(
            { active: true, currentWindow: true },
            async function(tabs) {
                await setValueByGeneratorId(generatorId, tabs[0].id);
            },
        );
    });
};

const setValueByGeneratorId = async (generatorId: string, tabId: number): Promise<void> => {
    await chrome.scripting.executeScript({
        target: {
            tabId,
        },
        func: setValueOnWebpage,
        args: [await generatorMap.get(generatorId).generator()],
    });
};
