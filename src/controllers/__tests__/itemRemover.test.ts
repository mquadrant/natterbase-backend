import app from '../../app'
import request from 'supertest'

describe('POST api/item_remover', () => {
    it('Should be defined', async () => {
        const response = await request(app).post('/api/item_remover')
        expect(response).toBeDefined()
    })

    it('Should return a 422 when req body properties is invalid', async () => {
        const res = await request(app)
            .post('/api/item_remover')
            .send({
                items: {
                    type: 'durban',
                    crux: 'indices',
                },
                item: 'type',
            })
        expect(res.status).toBe(422)
    })

    it('Should return the data after removing the item from the object', async () => {
        const res = await request(app)
            .post('/api/item_remover')
            .send({
                data: {
                    type: 'durban',
                    crux: 'indices',
                    color: 'green',
                    title: 'indict the idiot',
                },
                item: 'type',
            })
        expect(res.status).toBe(201)
        expect(res.body).toEqual({
            status: 'success',
            data: {
                crux: 'indices',
                color: 'green',
                title: 'indict the idiot',
            },
        })
    })

    it('Should return "attribute not found" if item not found', async () => {
        const res = await request(app)
            .post('/api/item_remover')
            .send({
                data: {
                    type: 'durban',
                    crux: 'indices',
                    color: 'green',
                },
                item: 'shape',
            })
        expect(res.status).toBe(201)
        expect(res.body).toMatchObject({
            message: 'attribute not found',
        })
    })
})
