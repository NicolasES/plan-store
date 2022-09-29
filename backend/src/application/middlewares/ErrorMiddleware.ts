import { Request, Response, NextFunction } from 'express'
import { ValidationError } from 'yup'

export default function(err: any, _req: Request, res: Response, _next: NextFunction) {
    let statusCode = err.statusCode || 400

    if (err instanceof ValidationError) {
        statusCode = 422
    }

    const response = {
        message: err.message,
        statusCode: statusCode,
        data: err.data
    }
    
    return res.status(response.statusCode).json(response)
}