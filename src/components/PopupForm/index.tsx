import {Menu, type MenuProps, Typography} from 'antd';
import React, {useState} from 'react';

import GeneratorsForm from '~src/components/GeneratorsForm';

import SettingsForm from '../SettingsForm';
import HotkeysForm from '~src/components/HotkeysForm';

const {Title} = Typography;

function PopupForm() {
    enum menuItemProps {
        MAIN = 'main',
        GENERATORS = 'generators',
        HOTKEYS = 'hotkeys',
    }

    const items: MenuProps['items'] = [
        {
            label: 'Основное',
            key: menuItemProps.MAIN,
        },
        {
            label: 'Генераторы',
            key: menuItemProps.GENERATORS,
        },
        {
            label: 'Горячие клавиши',
            key: menuItemProps.HOTKEYS,
        },
    ];
    const [current, setCurrent] = useState('main');

    const onMenuClicked: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    };

    let form: React.JSX.Element;
    switch (current) {
    case menuItemProps.GENERATORS:
        form = <GeneratorsForm/>;
        break;
    case menuItemProps.HOTKEYS:
        form = <HotkeysForm/>;
        break;
    default:
        form = <SettingsForm/>;
    }

    return (
        <div>
            <Title level={4}>Генератор тестовых данных</Title>
            <Menu
                onClick={onMenuClicked}
                selectedKeys={[current]}
                mode="horizontal"
                items={items}
            />
            {form}
        </div>
    );
}

export default PopupForm;
