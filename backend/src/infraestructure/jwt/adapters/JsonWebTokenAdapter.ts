import JwtService from '@infraestructure/jwt/JwtService'
import jsonwebtoken from 'jsonwebtoken'
import config from '@config/Config'


export default class JsonWebTokenAdapter implements JwtService{

  createToken(data: object): string {
    return jsonwebtoken.sign(data, config.JWT_SECRET_KEY)
  }
  
  vakidateToken(token: string): object {
    return Object(jsonwebtoken.verify(token, config.JWT_SECRET_KEY))
  }
}
