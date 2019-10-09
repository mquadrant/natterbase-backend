import app from '../../app'
import request from 'supertest'

describe('POST api/aladdin_travel', () => {
    it('Should be defined', async () => {
        const response = await request(app).post('/api/aladdin_travel')
        expect(response).toBeDefined()
    })

    it('Should return O as the lowest index', async () => {
        const res = await request(app)
            .post('/api/aladdin_travel')
            .send({
                n: 4,
                magic: [3, 2, 5, 4],
                dist: [2, 3, 4, 2],
            })
        expect(res.status).toBe(201)
        expect(res.body).toMatchObject({
            lowestIndex: 0,
        })
    })

    it('Should return 2 as the lowest index', async () => {
        const res = await request(app)
            .post('/api/aladdin_travel')
            .send({
                n: 4,
                magic: [1, 2, 5, 4],
                dist: [2, 3, 4, 2],
            })
        expect(res.status).toBe(201)
        expect(res.body).toMatchObject({
            lowestIndex: 2,
        })
    })

    it('Should return -1 as the lowest index', async () => {
        const res = await request(app)
            .post('/api/aladdin_travel')
            .send({
                n: 4,
                magic: [0, 1, 5, 4],
                dist: [2, 3, 4, 2],
            })
        expect(res.status).toBe(201)
        expect(res.body).toMatchObject({
            lowestIndex: -1,
        })
    })

    it('Should return 3 as the lowest index', async () => {
        const res = await request(app)
            .post('/api/aladdin_travel')
            .send({
                n: 4,
                magic: [2, 2, 5, 4],
                dist: [2, 3, 4, 2],
            })
        expect(res.status).toBe(201)
        expect(res.body).toMatchObject({
            lowestIndex: 3,
        })
    })
})
