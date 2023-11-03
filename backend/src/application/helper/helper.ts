import { v4 as uuidv4 } from 'uuid'
import bcrypt from 'bcryptjs'

const generateId = () => uuidv4()

const crypto = {
    hash: (s: string) => bcrypt.hashSync(s ,bcrypt.genSaltSync(10)),
    compare: (s: string, hash: string) => bcrypt.compareSync(s, hash) 
}

export {
    generateId,
    crypto
}

