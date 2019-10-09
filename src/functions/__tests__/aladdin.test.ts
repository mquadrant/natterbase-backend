import aladdin from '../aladdinTravel'

test('When the portal is the first index', () => {
    expect(aladdin([3, 2, 5, 4], [2, 3, 4, 2], 4)).toBe(0)
})

test('when the third portal is the entry point to complete the journey', () => {
    expect(aladdin([1, 2, 5, 4], [2, 3, 4, 2], 4)).toBe(2)
})

test('When no solution to completing the journey', () => {
    expect(aladdin([0, 1, 5, 4], [2, 3, 4, 2], 4)).toBe(-1)
})
test('When the last portal is the entry point to complete the journey', () => {
    expect(aladdin([1, 2, 3, 6], [2, 3, 4, 2], 4)).toBe(3)
})
