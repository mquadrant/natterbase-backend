export default function(data: any, rules: string[]) {
    const rulesObj: any = {}
    const result: any = {
        invalidItem: [],
        itemNotPresent: [],
    }
    //convert rule array to object
    for (let i = 0; i < rules.length; i++) {
        if (!rulesObj[rules[i]]) {
            rulesObj[rules[i]] = 1
        }
    }
    //Checking if data item is present in rule object
    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            if (rulesObj[key]) {
                rulesObj[key]++
            } else {
                result.invalidItem.push(key)
            }
        }
    }
    //checking those item that are not present
    const ruleEntries = Object.entries(rulesObj)
    for (const [item, count] of ruleEntries) {
        if (count === 1) {
            result.itemNotPresent.push(item)
        }
    }
    //result
    if (result.invalidItem.length || result.itemNotPresent.length) {
        result['result'] = 'invalid'
        return result
    } else {
        result['result'] = 'valid'
        return result
    }
}
