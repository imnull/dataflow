type TPromiseType<T> = T extends Promise<infer U> ? U : unknown
type TPromiseCallbackType<T> = T extends { (...args: unknown[]): Promise<infer U> } ? U : unknown

const foo = () => Promise.resolve(0)

type TT = TPromiseType<ReturnType<typeof foo>>
type TTT = TPromiseCallbackType<typeof foo>

type TPromiseMap<T extends { [key: string]: (...args: unknown[]) => Promise<unknown> } = { [key: string]: (...args: unknown[]) => Promise<unknown> }> = { [key in keyof T]: TPromiseCallbackType<T[key]> }


// const map = {
//     a: () => Promise.resolve(0),
//     b: () => Promise.resolve('1')
// }

// type TTTT = TPromiseMap<typeof map>

// const mapper = <T extends { [key: string]: (...args: unknown[]) => Promise<unknown> }>(map: T): Promise<TPromiseMap<typeof map>> => {
//     return Promise.resolve({} as TPromiseMap<typeof map>)
// }

// mapper({
//     a: () => Promise.resolve(0),
//     b: () => Promise.resolve('1'),
//     c: () => Promise.resolve(true),
// }).then(res => {

// })

