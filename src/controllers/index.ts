import { Request, Response, NextFunction } from 'express'
import env from '../config'

//Available methods
export const availableMethods = async function(
    _req: Request,
    res: Response,
    _next: NextFunction
) {
    res.json({
        message: 'Methods available in this API',
        apiDocUrl: '',
        data: [
            {
                id: 1,
                name: 'Input Validation',
                description:
                    'Function to perform input validation on a request body',
                urlPOST: `${env.backendURL}/api/input_validation`,
            },
            {
                id: 2,
                name: 'Item Remover',
                description: 'Function to remove an item from an object',
                urlPOST: `${env.backendURL}/api/item_remover`,
            },
            {
                id: 3,
                name: 'Aladdin traveling carpet',
                description:
                    'Function to find the lowest index of the starting points that Aladdin can start his journey and be able to visit all the magical locations on his path',
                urlPOST: `${env.backendURL}/api/aladdin_travel`,
            },
        ],
    })
}
