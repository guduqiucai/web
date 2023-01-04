export {}
function createNumberArray(length: number, value: number): number[] {
    const arr = Array<number>(length).fill(value)
    return arr
}
function createStringArray(length: number, value: string): string[] {
    const arr = Array<string>(length).fill(value)
    return arr
}
const res = createNumberArray(3, 100) // [100, 100, 100]
// 上面的情况很冗余，用泛型来解决
function createArray<T>(length: number, value: T): T[] {
    const arr = Array<T>(length).fill(value)
    return arr
}
const res1 = createArray<string>(3, '100')
const res2 = createArray<number>(3, 100)

