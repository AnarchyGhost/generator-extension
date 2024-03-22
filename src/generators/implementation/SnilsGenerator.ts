import type { Generator } from '../Generator';
import { randomWithLength } from '../utils';

export class SnilsGenerator implements Generator {
    generate(): string {
        const number = randomWithLength(9);

        const sum = number
            .split('')
            .map((val, i) => parseInt(val) * (9 - i))
            .reduce((a, b) => a + b);

        const checkSum = String((sum % 101) % 100).padStart(2, '0');
        return String(number + checkSum);
    }
}
