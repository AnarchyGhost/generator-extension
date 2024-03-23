import React from 'react';
import {Flex, Select} from 'antd';
import PropTypes from 'prop-types';
import {useStorage} from '~node_modules/@plasmohq/storage/dist/hook';
import {generatorMap} from '~src/generators/list';
import styles from './styles.module.scss';


HotkeyChanger.propTypes = {
    hotkeyConfig: PropTypes.object,
};


function HotkeyChanger({hotkeyConfig}) {

    const [hotkey, setHotkey] =
        useStorage<string>(hotkeyConfig.id, (v) => !v ? hotkeyConfig.defaultValue : v);

    const options = [...generatorMap.values()].map((it) => ({
        value: it.id,
        label: it.title,
    }));
    const onSelect = (value: string) => {
        setHotkey(value).then(() =>
            console.log(`saved hotkey ${hotkeyConfig.id}, ${value}`),
        );
    };
    const filterOption = (input: string, option?: { label: string; value: string }) =>
        (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
    
    return (
        <Flex className={styles.root}>
            <p className={styles.root__hotkeyTitle}>{hotkeyConfig.title}</p>
            <Flex align='center'>
                <Select
                    showSearch
                    className={styles.root__hotkeySelect}
                    value={hotkey}
                    placeholder="Выберите клавишу"
                    optionFilterProp="children"
                    onSelect={onSelect}
                    filterOption={filterOption}
                    options={options}
                />
            </Flex>
        </Flex>
    );
}

export default HotkeyChanger;
