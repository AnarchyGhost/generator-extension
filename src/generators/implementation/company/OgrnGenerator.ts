import { faker } from '../../faker';

export default (): string => {
    let value = faker.string.fromCharacters('15');
    value += faker.string.numeric({ length: 2, allowLeadingZeros: true });
    const subjectCode = faker.number.int({ min: 1, max: 92 });
    if (subjectCode < 10)
        value += `0${subjectCode}`;
    else
        value += subjectCode;
    value += faker.string.numeric(7);
    value += String(Number(value) % 11 % 10);
    return value;
};