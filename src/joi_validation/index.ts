import Joi from 'joi'

function validateItem(requestValidation: Express.Request) {
    // define joi validation schema for item validate api
    const schema = Joi.object().keys({
        data: Joi.object(),
        rules: Joi.array(),
    })
    return Joi.validate(requestValidation, schema)
}

function removeItem(requestValidation: Express.Request) {
    // define joi validation schema for item remove api
    const schema = Joi.object().keys({
        data: Joi.object(),
        item: Joi.string(),
    })
    return Joi.validate(requestValidation, schema)
}

function travelAladdin(requestValidation: Express.Request) {
    // define joi validation schema for item remove api
    const schema = Joi.object().keys({
        n: Joi.number(),
        magic: Joi.array(),
        dist: Joi.array(),
    })
    return Joi.validate(requestValidation, schema)
}

export { validateItem, removeItem, travelAladdin }
