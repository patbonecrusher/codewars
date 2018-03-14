/*
Your  task is to  sort a given  string. Each word in the String will
contain a single number. This number is the position the word should
have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input String is empty, return an empty String. The words in the
input String will only contain valid consecutive numbers.

For an input: "is2 Thi1s T4est 3a" the function should return 
"Thi1s is2 3a T4est"
*/

const your_order = scrambled => {
    const sarray = scrambled.split(' ')
    const withIndexed = sarray.map(i => {
        const rex = /\d+/g
        const m = rex.exec(i)
        const index = m ? m[0] : -1
        return { index, data: i }
    }) /* ? */

    const ordered = withIndexed.sort((a,b) => { 
        if (a.index < b.index) return -1
        if (a.index > b.index) return 1
        return 0
    }) /* ? */

    return ordered.map(i => i.data)
}

your_order("is2 Thi1s T4est 3a") /* ? */

const your_order2 = order => order.split(' ').sort((a,b) => a.match(/\d+/) > b.match(/\d+/)).join(' ')
your_order2("is2 Thi1s T4est 3a") /* ? */
