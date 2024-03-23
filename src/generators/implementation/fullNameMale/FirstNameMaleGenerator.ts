import {Sex} from '@faker-js/faker';

import {faker} from '../../faker';

export default (): string => faker.person.lastName(Sex.Male);
