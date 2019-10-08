import express, { Request, Response } from 'express'
const router = express.Router()

/* GET home page. */
router.get('/', function(_req: Request, res: Response) {
    res.send({ message: 'Problem Solving Api homepage' })
})

export default router
