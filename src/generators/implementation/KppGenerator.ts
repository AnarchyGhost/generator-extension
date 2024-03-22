import type { Generator } from '../Generator';
import { randomWithLength } from '../utils';

export class KppGenerator implements Generator {
    generate(): string {
        return randomWithLength(9);
    }
}
