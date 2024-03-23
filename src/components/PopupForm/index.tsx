import {Menu, type MenuProps, Typography} from 'antd';
import React, {useState} from 'react';

import GeneratorsForm from '~src/components/GeneratorsForm';

import SettingsForm from '../SettingsForm';

const {Title} = Typography;

const items: MenuProps['items'] = [
    {
        label: 'Основное',
        key: 'main',
    },
    {
        label: 'Генераторы',
        key: 'generators',
    },
];

function PopupForm() {
    const [current, setCurrent] = useState('main');

    const onMenuClicked: MenuProps['onClick'] = (e) => {
        setCurrent(e.key);
    };

    let form: React.JSX.Element;
    switch (current) {
    case 'generators':
        form = <GeneratorsForm/>;
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
