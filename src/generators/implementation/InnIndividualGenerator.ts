import type { Generator } from '../Generator';
import { randomWithLength } from '../utils';

export class InnIndividualGenerator implements Generator {
	private M1: number[] = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8];
	private M2: number[] = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8];

	generate(): string {
		let value = randomWithLength(10);
		value += this.checksum(value, this.M1).toString();
		value += this.checksum(value, this.M2).toString();
		console.log('gen');
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
