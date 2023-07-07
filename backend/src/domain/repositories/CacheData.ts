export default interface CacheData {
    set(key: string, value: any, expirationSeconds?: number): Promise<void>
    get(key: string): Promise<any>
}