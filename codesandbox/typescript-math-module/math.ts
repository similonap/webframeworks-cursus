// public door het export keyword.
export const add = (a: number, b: number): number => {
    log(`${a} + ${b}`);
    return a + b;
}

// private.
export const log = (message: string): void => {
    console.log(message);
}

// Mogelijk om 1 object als 'default' te exporteren.
export default add;