import {faker} from '../../faker';

export default (): string => `9${faker.string.numeric(9)}`;

