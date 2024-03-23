import { Typography } from 'antd';
import React from 'react';

import SettingsForm from '../SettingsForm';

const { Title } = Typography;

function PopupForm() {
    return (
        <div>
            <Title level={4}>Генератор тестовых данных</Title>
            <SettingsForm />
        </div>
    );
}

export default PopupForm;
