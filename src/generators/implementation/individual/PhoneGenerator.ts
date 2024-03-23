import { faker } from '../../faker';
import type { Generator } from '../../Generator';

export class PhoneGenerator implements Generator {
    generate(): string {
        return `9${faker.string.numeric(9)}`;
    }
}
