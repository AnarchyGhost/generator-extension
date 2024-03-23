import { Sex } from '@faker-js/faker';

import { faker } from '../../faker';
import type { Generator } from '../../Generator';

export class LastNameFemaleGenerator implements Generator {
    generate(): string {
        return faker.person.lastName(Sex.Female);
    }
}
