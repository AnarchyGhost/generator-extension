import React from 'react';
import styles from './styles.module.scss';
import HotkeyChanger from '~src/components/HotkeyChanger';
import {StorageConstants} from '~src/constants/StorageConstants';

function HotkeysForm() {
    const hotkeys = [
        {
            id: StorageConstants.HOTKEY_1,
            title: 'Хоткей 1 (По умолчанию Ctrl-Shift-1)',
            defaultValue: 'snils',
        },
        {
            id: StorageConstants.HOTKEY_2,
            title: 'Хоткей 2 (По умолчанию Ctrl-Shift-2)',
            defaultValue: 'innIndividual',
        },
        {
            id: StorageConstants.HOTKEY_3,
            title: 'Хоткей 3 (По умолчанию Ctrl-Shift-3)',
            defaultValue: 'innLegal',
        },
        {
            id: StorageConstants.HOTKEY_4,
            title: 'Хоткей 4 (По умолчанию Ctrl-Shift-4)',
            defaultValue: 'defaultPassword',
        },
    ];
    const elements = hotkeys.map((it) => (
        <HotkeyChanger key={it.id} hotkeyConfig={it}/>
    ));
    return (
        <div className={styles.root}>
            {elements}
        </div>
    );
}

export default HotkeysForm;
