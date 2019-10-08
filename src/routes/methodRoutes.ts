import express, { Request, Response } from 'express'
const router = express.Router()

/* GET home page. */
router.get('/', function(_req: Request, res: Response) {
    res.json({
        message: 'Methods available in this API',
        apiDocUrl: '',
        data: [
            {
                id: 1,
                name: 'Input Validation',
                description:
                    'Function to perform input validation on a request body',
                url: '',
            },
            {
                id: 2,
                name: 'Item Remover',
                description: 'Function to remove an item from an object',
                url: '',
            },
            {
                id: 3,
                name: 'Aladdin traveling carpet',
                description:
                    'Function to find the lowest index of the starting points that Aladdin can start his journey and be able to visit all the magical locations on his path',
                url: '',
            },
        ],
    })
})

export default router
