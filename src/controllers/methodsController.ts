import { Request, Response, NextFunction } from 'express'
import inputValidationFunction from './../functions/inputValidation'
import itemRemoverFunction from './../functions/itemRemover'
import aladdinTravelFunction from './../functions/aladdinTravel'
import { validateItem, removeItem, travelAladdin } from './../joi_validation'

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

export const itemRemover = function(
    req: Request,
    res: Response,
    _next: NextFunction
) {
    //joi validation
    const { error } = removeItem(req.body)
    if (error) {
        // send a 422 error response if validation fails
        return res.status(422).json({
            status: 'error',
            message: 'Invalid request data',
            data: req.body,
        })
    } else {
        const result = itemRemoverFunction(req.body.data, req.body.item)
        if (result.result) {
            return res.status(201).json({
                status: 'success',
                data: result.message,
            })
        } else {
            return res.status(201).json({
                status: 'fail',
                message: result.message,
            })
        }
    }
}

export const aladdinTravel = function(
    req: Request,
    res: Response,
    _next: NextFunction
) {
    //joi validation
    const { error } = travelAladdin(req.body)
    if (error) {
        // send a 422 error response if validation fails
        return res.status(422).json({
            status: 'error',
            message: 'Invalid request data',
            data: req.body,
        })
    } else {
        const result = aladdinTravelFunction(
            req.body.magic,
            req.body.dist,
            req.body.n
        )
        if (result < 0) {
            return res.status(201).json({
                status: 'success',
                message: 'No solution in all path aladdin should take',
                portal: result,
            })
        } else {
            return res.status(201).json({
                status: 'success',
                portal: result,
            })
        }
    }
}
