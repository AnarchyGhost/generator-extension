export enum StorageConstants {
    DEFAULT_PASSWORD = 'DEFAULT_PASSWORD',
    DISABLED_GENERATORS = 'DISABLED_GENERATORS',
    HOTKEY_1 = 'HOTKEY_1',
    HOTKEY_2 = 'HOTKEY_2',
    HOTKEY_3 = 'HOTKEY_3',
    HOTKEY_4 = 'HOTKEY_4',
    HOTKEY_KEYS = 'HOTKEY_KEYS',
}

export const getDisabledGeneratorId = (id: string): string => {
    return `${StorageConstants.DISABLED_GENERATORS}_${id}`;
};

export const getHotkeyKeys = (hotkey: string): string => {
    return `${StorageConstants.HOTKEY_KEYS}_${hotkey}`;
};