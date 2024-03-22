import type { Generator } from '../Generator';
import { randomWithLength } from '../utils';

export class PhoneGenerator implements Generator {
	generate(): string {
		return `9${randomWithLength(9)}`;
	}
}
