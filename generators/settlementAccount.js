import {randomWithLength} from "../utils/random.js";

//TODO есть контрольная цифра расчитывающаяся через БИК
export const settlementAccount = () => `407${randomWithLength(2)}810${randomWithLength(12)}`