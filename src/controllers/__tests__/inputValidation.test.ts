import app from '../../app'
import request from 'supertest'

describe('POST api/input_validation', () => {
    it('Should be defined', async () => {
        const response = await request(app).post('/api/input_validation')
        expect(response).toBeDefined()
    })

    it('Should return a 422 when req body properties is invalid', async () => {
        const res = await request(app)
            .post('/api/input_validation')
            .send({
                info: {
                    type: 'durban',
                    crux: 'indices',
                },
            })
        expect(res.status).toBe(422)
    })

    it('Should return "valid" if all items in the data', async () => {
        const res = await request(app)
            .post('/api/input_validation')
            .send({
                data: {
                    type: 'durban',
                    crux: 'indices',
                    color: 'green',
                    title: 'indict the idiot',
                },
                rules: ['type', 'crux', 'color', 'title'],
            })
        expect(res.status).toBe(201)
        expect(res.body).toMatchObject({
            message: 'valid',
        })
    })

    it('Should return "invalid" and item not present in the body data', async () => {
        const res = await request(app)
            .post('/api/input_validation')
            .send({
                data: {
                    type: 'durban',
                    crux: 'indices',
                    color: 'green',
                },
                rules: ['type', 'crux', 'color', 'title'],
            })
        expect(res.status).toBe(201)
        expect(res.body).toMatchObject({
            message: 'invalid',
            data: {
                invalidItem: [],
                itemNotPresent: ['title'],
            },
        })
    })

    it('Should return "invalid" and invalid item(s) present in the body data', async () => {
        const res = await request(app)
            .post('/api/input_validation')
            .send({
                data: {
                    type: 'durban',
                    crux: 'indices',
                    shape: 'slim',
                },
                rules: ['type', 'crux'],
            })
        expect(res.status).toBe(201)
        expect(res.body).toMatchObject({
            message: 'invalid',
            data: {
                invalidItem: ['shape'],
                itemNotPresent: [],
            },
        })
    })
})
