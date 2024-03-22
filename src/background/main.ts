import { generatorListMap } from '../generators/list';
import { setValueOnWebpage } from './utils';

export function addGeneratorsMenuItems(): void {
	chrome.runtime.onInstalled.addListener(async () => {
		generatorListMap.forEach((value, key) => {
			chrome.contextMenus.create({
				id: key,
				title: value.title,
				type: 'normal',
				contexts: ['editable'],
			});
		});
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
		if (![...generatorListMap.keys()].includes(command)) return;
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
		args: [await generatorListMap.get(generatorName).generator.generate()],
	});
}
