import {randomWithLength} from "../utils/random.js";

const checksum = (value, multipliers) => {
    return multipliers.map((m, idx) => m * value[idx]).reduce((a,b)=>a+b) % 11 % 10
}
const M = [2, 4, 10, 3, 5, 9, 4, 6, 8]
export const innLegal = () => {
    let value = randomWithLength(9)
    value += checksum(value, M).toString()
    return value
}