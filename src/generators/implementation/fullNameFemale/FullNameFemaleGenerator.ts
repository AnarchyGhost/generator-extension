import {Sex} from '@faker-js/faker';

import {faker} from '../../faker';

export default (): string => `${faker.person.lastName(Sex.Female)} ${faker.person.firstName(Sex.Female)} ${faker.person.middleName(Sex.Female)}`;