import {faker} from '~src/generators/faker';


export default (): string => {
    const M1: number[] = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8];
    const M2: number[] = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8];

    const checksum = (value: string, multipliers: number[]): number => {
        return (
            (multipliers
                .map((m, idx) => m * Number(value[idx]))
                .reduce((a, b) => a + b) %
                11) %
            10
        );
    };

    let value = faker.string.numeric(10);
    value += checksum(value, M1).toString();
    value += checksum(value, M2).toString();
    return value;
};


