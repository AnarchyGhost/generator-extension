import {faker} from '../../faker';

export default (): string => {
    const M: number[] = [2, 4, 10, 3, 5, 9, 4, 6, 8];
    const checksum = (value: string, multipliers: number[]): number => {
        return (
            (multipliers
                .map((m, idx) => m * Number(value[idx]))
                .reduce((a, b) => a + b) %
                11) %
            10
        );
    };
    let value = faker.string.numeric(9);
    value += checksum(value, M).toString();
    return value;
};