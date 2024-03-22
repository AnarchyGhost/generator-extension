import type { Generator } from '../Generator';
import { randomWithLength } from '../utils';

export class InnLegalGenerator implements Generator {
    private M: number[] = [2, 4, 10, 3, 5, 9, 4, 6, 8];

    generate(): string {
        let value = randomWithLength(9);
        value += this.checksum(value, this.M).toString();
        return value;
    }

    private checksum(value: string, multipliers: number[]): number {
        return (
            (multipliers
                .map((m, idx) => m * Number(value[idx]))
                .reduce((a, b) => a + b) %
                11) %
            10
        );
    }
}
