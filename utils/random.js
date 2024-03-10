export const randomWithLength = (len) => {
    const pow = Math.pow(10, len);
    const maxValue = pow - 1;
    const random = Math.floor(Math.random() * maxValue);
    return String(random).padStart(len, '0');
}