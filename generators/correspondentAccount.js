import {randomWithLength} from "../utils/random.js";

//TODO должен заканчиваться на БИК банка
export const correspondentAccount = () => `301${randomWithLength(17)}`