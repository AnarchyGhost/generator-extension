import { Sex } from '@faker-js/faker';

import { faker } from '../../faker';
import type { Generator } from '../../Generator';

export class MiddleNameFemaleGenerator implements Generator {
    generate(): string {
        return faker.person.middleName(Sex.Female);
    }
}