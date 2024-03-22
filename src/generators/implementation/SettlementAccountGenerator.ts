import type { Generator } from '../Generator';
import { randomWithLength } from '../utils';

export class SettlementAccountGenerator implements Generator {
    generate(): string {
        return `407${randomWithLength(2)}810${randomWithLength(12)}`;
    }
}
