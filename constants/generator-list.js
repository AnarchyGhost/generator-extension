import {snils} from "../generators/snils.js";
import {innIndividual} from "../generators/innIndividual.js";
import {innLegal} from "../generators/innLegal.js";
import {kpp} from "../generators/kpp.js";
import {phone} from "../generators/phone.js";
import {correspondentAccount} from "../generators/correspondentAccount.js";
import {settlementAccount} from "../generators/settlementAccount.js";
import {defaultPassword} from "../generators/defaultPassword.js";

export const generatorList = {
    snils: {
        title: 'СНИСЛ',
        function: snils,
    },
    innfl: {
        title: 'ИНН ФЛ',
        function: innIndividual,
    },
    innul: {
        title: 'ИНН ЮЛ',
        function: innLegal,
    },
    kpp: {
        title: 'КПП',
        function: kpp,
    },
    phone: {
        title: 'Номер телефона',
        function: phone,
    },
    coracc: {
        title: 'Кореспондентский счёт',
        function: correspondentAccount,
    },
    settlementAccount: {
        title: 'Расчётный счёт',
        function: settlementAccount,
    },
    defaultPassword: {
        title: 'Стандартный пароль',
        function: defaultPassword,
    },
};