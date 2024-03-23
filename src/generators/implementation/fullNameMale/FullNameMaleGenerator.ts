import { Sex } from '@faker-js/faker';

import { faker } from '../../faker';
import type { Generator } from '../../Generator';

export class FullNameMaleGenerator implements Generator {
    generate(): string {
        return `${faker.person.lastName(Sex.Male)} ${faker.person.firstName(Sex.Male)} ${faker.person.middleName(Sex.Male)}`;
    }
}
