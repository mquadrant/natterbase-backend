export default function(magic: number[], dist: number[], n: number) {
    let portal = -1
    for (let i = 0; i < magic.length; i++) {
        let start = i
        let end = (start + n - 1) % n
        let magicSum = magic[start]
        let confirm = false
        //traveling through circular path
        while (start !== end) {
            //check if magic is not enough
            if (magicSum < dist[start]) {
                confirm = true
                break
            } else {
                magicSum = magicSum - dist[start] + magic[(start + 1) % n]
                start++
                if (start === end) {
                    magicSum -= dist[start]
                }
            }
            start = start % n
            end = end % n
        }
        //break out if any of the index satisfies this condition
        if (!confirm && magicSum >= 0) {
            portal = i
            break
        }
    }
    return portal
}
