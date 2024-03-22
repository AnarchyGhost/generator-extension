import type { Generator } from './Generator';
import { CorrespondentAccountGenerator } from './implementation/CorrespondentAccountGenerator';
import { DefaultPasswordGenerator } from './implementation/DefaultPasswordGenerator';
import { InnIndividualGenerator } from './implementation/InnIndividualGenerator';
import { InnLegalGenerator } from './implementation/InnLegalGenerator';
import { KppGenerator } from './implementation/KppGenerator';
import { PhoneGenerator } from './implementation/PhoneGenerator';
import { SettlementAccountGenerator } from './implementation/SettlementAccountGenerator';
import { SnilsGenerator } from './implementation/SnilsGenerator';

export interface GeneratorListItem {
    title: string;
    generator: Generator;
}

export const generatorListMap: Map<string, GeneratorListItem> = new Map<
    string,
    GeneratorListItem
>([
    [
        'snils',
        {
            title: 'СНИЛС',
            generator: new SnilsGenerator(),
        },
    ],
    [
        'innIndividual',
        {
            title: 'ИНН ФЛ',
            generator: new InnIndividualGenerator(),
        },
    ],
    [
        'innLegal',
        {
            title: 'ИНН ЮЛ',
            generator: new InnLegalGenerator(),
        },
    ],
    [
        'defaultPassword',
        {
            title: 'Стандартный пароль',
            generator: new DefaultPasswordGenerator(),
        },
    ],
    [
        'kpp',
        {
            title: 'КПП',
            generator: new KppGenerator(),
        },
    ],
    [
        'phoneNumber',
        {
            title: 'Номер телефона',
            generator: new PhoneGenerator(),
        },
    ],
    [
        'correspondentAccount',
        {
            title: 'Кореспондентский счёт',
            generator: new CorrespondentAccountGenerator(),
        },
    ],
    [
        'settlementAccount',
        {
            title: 'Расчётный счёт',
            generator: new SettlementAccountGenerator(),
        },
    ],
]);
