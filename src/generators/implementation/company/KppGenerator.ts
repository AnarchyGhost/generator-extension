import { faker } from '~src/generators/faker';

import type { Generator } from '../../Generator';

export class KppGenerator implements Generator {
    generate(): string {
        return faker.string.numeric(9);
    }
}
