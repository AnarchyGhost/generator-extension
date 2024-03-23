import {faker} from '../../faker';

export default (): string => `${faker.string.alpha({
    length: {
        min: 2,
        max: 4,
    },
})}-${faker.string.numeric({length: 2})}/${faker.string.alpha({
    length: {
        min: 2,
        max: 3,
    },
})}`;