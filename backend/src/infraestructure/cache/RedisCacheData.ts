import CacheData from "@domain/repositories/CacheData";
import { createClient, RedisClientType } from "redis";
import { injectable } from "tsyringe";
import config from '@config/Config'

@injectable()
export default class RedisCacheData implements CacheData {
  private redisCli: RedisClientType

  constructor() {
    this.redisCli = createClient({
      socket: {
        host: config.REDIS_HOST,
        port: config.REDIS_PORT
      }
    })
  }

  private connect() {
    if (!this.redisCli.isOpen) {
      return this.redisCli.connect()
    }
  }

  private disconnect() {
    if (this.redisCli.isOpen) {
      return this.redisCli.quit()
    }
  }

  async set(key: string, value: any, expirationSeconds?: number): Promise<void> {
    const expiration = expirationSeconds ? { EX: expirationSeconds } : {}
    await this.connect();
    await this.redisCli.set(key, value, expiration);
    await this.disconnect();
  }

  async get(key: string): Promise<any> {
    await this.connect();
    const result = await this.redisCli.get(key);
    await this.disconnect();
    return result;
  }
}