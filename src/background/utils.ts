export const setValueOnWebpage = (value: string): void => {
    const element = <HTMLInputElement>document.activeElement;
    element.value = value;
    element.dispatchEvent(new Event('input', {}));
};
