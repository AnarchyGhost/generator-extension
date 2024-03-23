import {Storage} from '@plasmohq/storage';

import {StorageConstants} from '~src/constants/StorageConstants';

export default async function generate(): Promise<string> {
    const storage = new Storage();
    return await storage.get(StorageConstants.DEFAULT_PASSWORD);
}