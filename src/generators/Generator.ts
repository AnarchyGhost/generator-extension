export interface Generator {
    generate(): string | Promise<string>;
}
