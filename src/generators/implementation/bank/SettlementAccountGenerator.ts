import {faker} from '../../faker';

export default (): string => `407${faker.string.numeric(2)}810${faker.string.numeric(12)}`;