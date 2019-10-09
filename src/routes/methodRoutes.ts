import express from 'express'
import { availableMethods } from './../controllers'
import {
    inputValidation,
    itemRemover,
    aladdinTravel,
} from './../controllers/methodsController'

const router = express.Router()

/* GET available methods */
router.get('/', availableMethods)

/* POST input validation router */
router.post('/input_validation', inputValidation)

/* POST object item remover router */
router.post('/item_remover', itemRemover)

/* POST aladdin travelling router */
router.post('/aladdin_travel', aladdinTravel)

export default router
