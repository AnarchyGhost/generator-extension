import { faker } from '../../faker';
import type { Generator } from '../../Generator';

export class SettlementAccountGenerator implements Generator {
    generate(): string {
        return `407${faker.string.numeric(2)}810${faker.string.numeric(12)}`;
    }
}
