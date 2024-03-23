import {faker} from '../../faker';

//TODO должен заканчиваться на БИК банка
export default (): string => `301${faker.string.numeric(17)}`;