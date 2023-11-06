export default interface JwtService {
  createToken(data: object): string
  
  vakidateToken(token: string): object
}
