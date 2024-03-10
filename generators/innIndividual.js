import {randomWithLength} from "../utils/random.js";

const checksum = (value, multipliers) => {
    return multipliers.map((m, idx) => m * value[idx]).reduce((a,b)=>a+b) % 11 % 10
}
const M1 = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8]
const M2 = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8]
export const innIndividual = () => {
    let value = randomWithLength(10)
    value += checksum(value, M1).toString()
    value += checksum(value, M2).toString()
    return value
}