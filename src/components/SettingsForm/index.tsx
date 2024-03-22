import { Button, Flex, Input, Typography } from 'antd';
import React, { useCallback, useState } from 'react';

import { useStorage } from '@plasmohq/storage/dist/hook';

import { StorageConstants } from '../../constants/StorageConstants';

const { Title } = Typography;

function SettingsForm() {
	const [defaultPasswordStorage, setDefaultPasswordStorage] =
		useStorage<string>(StorageConstants.DEFAULT_PASSWORD);
	const [defaultPassword, setDefaultPassword] = useState('');

	const updateDefaultPasswordLocal = useCallback(
		(event: { target: { value: string } }) => {
			setDefaultPassword(event.target.value);
		},
		[defaultPasswordStorage],
	);

	const saveDefaultPassword = useCallback(() => {
		setDefaultPasswordStorage(defaultPassword).then(() =>
			console.log('saved password'),
		);
	}, [defaultPassword]);

	const cancelDefaultPassword = useCallback(() => {
		setDefaultPassword(defaultPasswordStorage);
	}, [defaultPasswordStorage]);

	if (!defaultPassword && defaultPasswordStorage) {
		setDefaultPassword(defaultPasswordStorage);
	}

	const isDisabledSaveButton =
		!defaultPassword || defaultPasswordStorage == defaultPassword;

	return (
		<Flex gap="middle" vertical>
			<Title level={5}>Настройки</Title>
			<Input.Password
				addonBefore={'Пароль'}
				value={defaultPassword}
				onChange={updateDefaultPasswordLocal}
				onPressEnter={saveDefaultPassword}
				placeholder="Пароль"
			/>
			<Flex gap="large">
				{!isDisabledSaveButton && (
					<Button type="dashed" onClick={cancelDefaultPassword} block>
						Отменить
					</Button>
				)}
				<Button
					type="primary"
					onClick={saveDefaultPassword}
					disabled={isDisabledSaveButton}
					block>
					Сохранить
				</Button>
			</Flex>
		</Flex>
	);
}

export default SettingsForm;
