import dotenv from 'dotenv'

dotenv.config()

export default {
  PORT: Number(process.env.PORT),
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PORT: Number(process.env.REDIS_PORT),
  JWT_SECRET_KEY: (process.env.JWT_SECRET_KEY) || ''
}