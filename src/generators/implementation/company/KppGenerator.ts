import {faker} from '~src/generators/faker';


export default (): string => faker.string.numeric(9);