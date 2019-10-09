import itemRemover from '../itemRemover'

test('When the item is found and removed', () => {
    expect(
        itemRemover(
            {
                type: 'durban',
                crux: 'indices',
                color: 'green',
                title: 'indict the idiot',
            },
            'type'
        )
    ).toBe({
        result: true,
        message: {
            crux: 'indices',
            color: 'green',
            title: 'indict the idiot',
        },
    })
})
test('When the item is not found in the data', () => {
    expect(
        itemRemover(
            {
                type: 'durban',
                crux: 'indices',
                color: 'green',
                title: 'indict the idiot',
            },
            'shape'
        )
    ).toBe({
        result: false,
        message: 'attribute not found',
    })
})
