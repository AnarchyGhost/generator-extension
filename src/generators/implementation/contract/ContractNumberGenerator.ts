import { faker } from '../../faker';
import type { Generator } from '../../Generator';

export class ContractNumberGenerator implements Generator {
    generate(): string {
        return `${faker.string.alpha({
            length: {
                min: 2,
                max: 4,
            },
        })}-${faker.string.numeric({ length: 2 })}/${faker.string.alpha({
            length: {
                min: 2,
                max: 3,
            },
        })}`;
    }
}
