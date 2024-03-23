import { faker } from '../../faker';
import type { Generator } from '../../Generator';

//TODO должен заканчиваться на БИК банка
export class CorrespondentAccountGenerator implements Generator {
    generate(): string {
        return `301${faker.string.numeric(17)}`;
    }
}
