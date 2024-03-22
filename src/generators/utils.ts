export function randomWithLength(len: number): string {
    const pow = Math.pow(10, len);
    const maxValue = pow - 1;
    const random = Math.floor(Math.random() * maxValue);
    return String(random).padStart(len, '0');
}
