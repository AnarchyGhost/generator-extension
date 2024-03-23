export enum StorageConstants {
    DEFAULT_PASSWORD = 'DEFAULT_PASSWORD',
    DISABLED_GENERATORS = 'DISABLED_GENERATORS',
}

export function getDisabledGeneratorId(id: string): string {
    return `${StorageConstants.DISABLED_GENERATORS}_${id}`;
}