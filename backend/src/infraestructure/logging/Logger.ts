export default interface Logger {
    error(message: string, error?: Error): void
    warn(message: string): void
    info(message: string): void
    debug(message: string): void
}