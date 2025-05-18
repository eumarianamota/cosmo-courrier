export function randomInstance<T>(types: T[]): T {
    const index = Math.floor(Math.random() * types.length)
    return types[index]
}