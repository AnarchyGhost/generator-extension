import { Sex } from '@faker-js/faker';

import { faker } from '../../faker';
import type { Generator } from '../../Generator';

export class FirstNameFemaleGenerator implements Generator {
    generate(): string {
        return faker.person.lastName(Sex.Female);
    }
}
