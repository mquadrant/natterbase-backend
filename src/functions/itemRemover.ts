export default function(data: object, item: string) {
    let cloneData: any = Object.assign({}, data)
    let found = false
    const dataKeys = Object.keys(data)

    for (let i = 0; i < dataKeys.length; i++) {
        if (dataKeys[i] === item) {
            found = true
            delete cloneData[dataKeys[i]]
        }
    }
    if (found) {
        return {
            result: found,
            message: cloneData,
        }
    } else {
        return {
            result: found,
            message: 'attribute not found',
        }
    }
}
