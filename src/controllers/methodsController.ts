import { Request, Response, NextFunction } from 'express'
import inputValidationFunction from './../functions/inputValidation'

export const inputValidation = function(
    req: Request,
    res: Response,
    _next: NextFunction
) {
    const result = inputValidationFunction(req.body.data, req.body.rules)
    res.json({
        data: result,
    })
}

export const itemRemover = async function(
    _req: Request,
    _res: Response,
    _next: NextFunction
) {}

export const aladdinTravel = async function(
    _req: Request,
    _res: Response,
    _next: NextFunction
) {}
