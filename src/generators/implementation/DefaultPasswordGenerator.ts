import { Storage } from '@plasmohq/storage';

import { StorageConstants } from '~src/constants/StorageConstants';

import type { Generator } from '../Generator';

export class DefaultPasswordGenerator implements Generator {
    async generate(): Promise<string> {
        const storage = new Storage();
        return await storage.get(StorageConstants.DEFAULT_PASSWORD);
    }
}
