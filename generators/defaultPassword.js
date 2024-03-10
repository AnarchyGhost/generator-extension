import {storageList} from "../constants/storage-list.js";

export const defaultPassword = async () => (await chrome.storage.sync.get())[storageList.DEFAULT_PASSWORD.name];