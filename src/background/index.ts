import { addGeneratorsMenuItems, addOnClickForMenuItems, addShortcuts, reloadHotkeys } from './main';

addGeneratorsMenuItems();
addOnClickForMenuItems();
reloadHotkeys().then();
addShortcuts();
