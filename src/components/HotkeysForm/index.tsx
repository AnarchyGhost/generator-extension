import React, { useState } from 'react';
import styles from './styles.module.scss';
import HotkeyChanger from '~src/components/HotkeyChanger';
import { sendUpdateHotkeysMessage } from '~src/background/messages/updateHotkeys';
import { useStorage } from '@plasmohq/storage/dist/hook';
import type { HotkeyInfo } from '~src/background/main';
import { StorageConstants } from '~src/constants/StorageConstants';
import { generatorList } from '~src/generators/list';

function HotkeysForm() {
    const [hotkeysInfo, setHotkeysInfo] = useState<Array<HotkeyInfo>>([]);
    const [hotkeysInfoStorage] = useStorage<Array<HotkeyInfo>>(StorageConstants.HOTKEY_KEYS, (v) => v ?? []);
    sendUpdateHotkeysMessage().then(() => {
        setHotkeysInfo(hotkeysInfoStorage);
    });
    const hotkeys = hotkeysInfo.map((it, idx) => ({
        id: it.name,
        defaultValue: generatorList[idx]?.id,
        title: it.shortcut?.length ? it.shortcut : 'Не задано',
    }));
    const elements = hotkeys.map((it) => (
        <HotkeyChanger key={it.id} hotkeyConfig={it} />
    ));
    return (
        <div className={styles.root}>
            {elements}
        </div>
    );
}

export default HotkeysForm;
