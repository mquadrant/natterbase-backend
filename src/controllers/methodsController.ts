import { Request, Response, NextFunction } from 'express'
import inputValidationFunction from './../functions/inputValidation'
import { validateItem } from './../joi_validation'

export const inputValidation = function(
    req: Request,
    res: Response,
    _next: NextFunction
) {
    //joi validation
    const { error } = validateItem(req.body)
    if (error) {
        // send a 422 error response if validation fails
        return res.status(422).json({
            status: 'error',
            message: 'Invalid request data',
            data: req.body,
        })
    } else {
        const result = inputValidationFunction(req.body.data, req.body.rules)
        return res.status(201).json({
            status: 'success',
            message: result.result,
            data: {
                invalidItem: result.invalidItem,
                itemNotPresent: result.itemNotPresent,
            },
        })
    }
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
