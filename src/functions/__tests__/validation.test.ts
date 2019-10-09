import validation from '../inputValidation'

test('When all the items are present in the data', () => {
    expect(
        validation(
            {
                type: 'durban',
                crux: 'indices',
                color: 'green',
                title: 'indict the idiot',
            },
            ['type', 'crux', 'color', 'title']
        )
    ).toStrictEqual({
        result: 'valid',
        invalidItem: [],
        itemNotPresent: [],
    })
})

test('When not all the items are present in the data', () => {
    expect(
        validation(
            {
                type: 'durban',
                crux: 'indices',
                color: 'green',
            },
            ['type', 'crux', 'color', 'title']
        )
    ).toStrictEqual({
        result: 'invalid',
        invalidItem: [],
        itemNotPresent: ['title'],
    })
})

test('When an item is invalid and are not to be in the data', () => {
    expect(
        validation(
            {
                type: 'durban',
                crux: 'indices',
                shape: 'fat',
            },
            ['type', 'crux']
        )
    ).toStrictEqual({
        result: 'invalid',
        invalidItem: ['shape'],
        itemNotPresent: [],
    })
})

test('When some item are missing and the data contain invalid item', () => {
    expect(
        validation(
            {
                type: 'durban',
                crux: 'indices',
                color: 'green',
                shape: 'fat',
            },
            ['type', 'crux', 'color', 'title']
        )
    ).toStrictEqual({
        result: 'invalid',
        invalidItem: ['shape'],
        itemNotPresent: ['title'],
    })
})
