import type { Generator } from '../Generator';
import { randomWithLength } from '../utils';

//TODO должен заканчиваться на БИК банка
export class CorrespondentAccountGenerator implements Generator {
	generate(): string {
		return `301${randomWithLength(17)}`;
	}
}
