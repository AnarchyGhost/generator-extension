import {Flex, Switch} from 'antd';
import React, {useCallback} from 'react';
import {CheckOutlined, CloseOutlined} from '~node_modules/@ant-design/icons';
import styles from './styles.module.scss';
import {useStorage} from '~node_modules/@plasmohq/storage/dist/hook';
import {getDisabledGeneratorId} from '~src/constants/StorageConstants';
import PropTypes from 'prop-types';
import {sendUpdateGeneratorsMessage} from '~src/background/messages/updateGenerators';

Generator.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
};

function Generator({id, title}) {
    const [disabledGenerators, setDisabledGenerators] =
        useStorage<boolean>(getDisabledGeneratorId(id), (v) => v === undefined ? true : v);

    const onChange = useCallback(async (event: boolean) => {
        setDisabledGenerators(event).then();
        await sendUpdateGeneratorsMessage();
    }, [id]);


    return (
        <Flex className={styles.root}>
            <p className={styles.root__title}>{title}</p>
            <Flex align='center'>
                <Switch checkedChildren={<CheckOutlined/>}
                    unCheckedChildren={
                        <CloseOutlined/>}
                    defaultChecked
                    onChange={onChange}
                    value={disabledGenerators}/>
            </Flex>
        </Flex>
    );
}

export default Generator;
