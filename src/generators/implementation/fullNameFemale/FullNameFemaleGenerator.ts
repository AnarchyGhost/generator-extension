import { Sex } from '@faker-js/faker';

import { faker } from '../../faker';
import type { Generator } from '../../Generator';

export class FullNameFemaleGenerator implements Generator {
    generate(): string {
        return `${faker.person.lastName(Sex.Female)} ${faker.person.firstName(Sex.Female)} ${faker.person.middleName(Sex.Female)}`;
    }
}
