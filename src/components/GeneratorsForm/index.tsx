import React from 'react';
import {generatorList} from '~src/generators/list';
import styles from './styles.module.scss';
import Generator from '~src/components/Generator';

function GeneratorsForm() {
    const elements = generatorList.map((it) => (
        <Generator key={it.id} id={it.id} title={it.title}/>
    ));
    return (
        <div className={styles.root}>
            {elements}
        </div>
    );
}

export default GeneratorsForm;
