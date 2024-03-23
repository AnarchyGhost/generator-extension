import { ContractNumberGenerator } from '~src/generators/implementation/contract/ContractNumberGenerator';
import { RoleGenerator } from '~src/generators/implementation/employee/RoleGenerator';
import { FirstNameFemaleGenerator } from '~src/generators/implementation/fullNameFemale/FirstNameFemaleGenerator';
import { FullNameFemaleGenerator } from '~src/generators/implementation/fullNameFemale/FullNameFemaleGenerator';
import { LastNameFemaleGenerator } from '~src/generators/implementation/fullNameFemale/LastNameFemaleGenerator';
import { MiddleNameFemaleGenerator } from '~src/generators/implementation/fullNameFemale/MiddleNameFemaleGenerator';
import { FirstNameMaleGenerator } from '~src/generators/implementation/fullNameMale/FirstNameMaleGenerator';
import { FullNameMaleGenerator } from '~src/generators/implementation/fullNameMale/FullNameMaleGenerator';
import { LastNameMaleGenerator } from '~src/generators/implementation/fullNameMale/LastNameMaleGenerator';
import { MiddleNameMaleGenerator } from '~src/generators/implementation/fullNameMale/MiddleNameMaleGenerator';

import type { Generator } from './Generator';
import { CorrespondentAccountGenerator } from './implementation/bank/CorrespondentAccountGenerator';
import { SettlementAccountGenerator } from './implementation/bank/SettlementAccountGenerator';
import { InnLegalGenerator } from './implementation/company/InnLegalGenerator';
import { KppGenerator } from './implementation/company/KppGenerator';
import { DefaultPasswordGenerator } from './implementation/DefaultPasswordGenerator';
import { InnIndividualGenerator } from './implementation/individual/InnIndividualGenerator';
import { PhoneGenerator } from './implementation/individual/PhoneGenerator';
import { SnilsGenerator } from './implementation/individual/SnilsGenerator';

export interface GeneratorListNode {
    id: string;
    title: string;
}

export interface GeneratorListItem extends GeneratorListNode {
    generator: Generator;
}

export interface GeneratorListGroup extends GeneratorListNode {
    generatorList: Array<GeneratorListGroup | GeneratorListItem>;
}

export const isListItem = (
    node: GeneratorListNode,
): node is GeneratorListItem => {
    return 'generator' in node;
};

export const isListGroup = (
    node: GeneratorListNode,
): node is GeneratorListGroup => {
    return 'generatorList' in node;
};

export const generatorConfiguration: Array<
    GeneratorListGroup | GeneratorListItem
> = [
    {
        id: 'individual',
        title: 'Физ. лицо',
        generatorList: [
            {
                id: 'snils',
                title: 'СНИЛС',
                generator: new SnilsGenerator(),
            },
            {
                id: 'innIndividual',
                title: 'ИНН ФЛ',
                generator: new InnIndividualGenerator(),
            },
            {
                id: 'phoneNumber',
                title: 'Номер телефона',
                generator: new PhoneGenerator(),
            },
        ],
    },
    {
        id: 'company',
        title: 'Юр. лицо',
        generatorList: [
            {
                id: 'innLegal',
                title: 'ИНН ЮЛ',
                generator: new InnLegalGenerator(),
            },
            {
                id: 'kpp',
                title: 'КПП',
                generator: new KppGenerator(),
            },
        ],
    },
    {
        id: 'defaultPassword',
        title: 'Стандартный пароль',
        generator: new DefaultPasswordGenerator(),
    },
    {
        id: 'fullNameGroupMale',
        title: 'ФИО (мужское)',
        generatorList: [
            {
                id: 'lastNameMale',
                title: 'Фамилия',
                generator: new LastNameMaleGenerator(),
            },
            {
                id: 'firstNameMale',
                title: 'Имя',
                generator: new FirstNameMaleGenerator(),
            },
            {
                id: 'middleNameMale',
                title: 'Отчество',
                generator: new MiddleNameMaleGenerator(),
            },
            {
                id: 'fullNameMale',
                title: 'Полное ФИО',
                generator: new FullNameMaleGenerator(),
            },
        ],
    },
    {
        id: 'fullNameGroupFemale',
        title: 'ФИО (женское)',
        generatorList: [
            {
                id: 'lastNameFemale',
                title: 'Фамилия',
                generator: new LastNameFemaleGenerator(),
            },
            {
                id: 'firstNameFemale',
                title: 'Имя',
                generator: new FirstNameFemaleGenerator(),
            },
            {
                id: 'middleNameFemale',
                title: 'Отчество',
                generator: new MiddleNameFemaleGenerator(),
            },
            {
                id: 'fullNameFemale',
                title: 'Полное ФИО',
                generator: new FullNameFemaleGenerator(),
            },
        ],
    },
    {
        id: 'employee',
        title: 'Сотрудник',
        generatorList: [
            {
                id: 'role',
                title: 'Должность',
                generator: new RoleGenerator(),
            },
        ],
    },
    {
        id: 'contract',
        title: 'Договор',
        generatorList: [
            {
                id: 'contractNumber',
                title: 'Номер договора',
                generator: new ContractNumberGenerator(),
            },
        ],
    },
    {
        id: 'bank',
        title: 'Банковские реквизиты',
        generatorList: [
            {
                id: 'correspondentAccount',
                title: 'Кореспондентский счёт',
                generator: new CorrespondentAccountGenerator(),
            },
            {
                id: 'settlementAccount',
                title: 'Расчётный счёт',
                generator: new SettlementAccountGenerator(),
            },
        ],
    },
];

function formGeneratorListRecursively(
    list: Array<GeneratorListGroup | GeneratorListItem>,
): Array<GeneratorListItem> {
    const array = [];
    list.forEach((it) => {
        if (isListGroup(it)) {
            array.push(...formGeneratorListRecursively(it.generatorList));
        } else {
            array.push(it);
        }
    });
    return array;
}

export const generatorMap: Map<string, GeneratorListItem> = new Map(
    formGeneratorListRecursively(generatorConfiguration).map((it) => [
        it.id,
        it,
    ]),
);
