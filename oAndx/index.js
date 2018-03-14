function XOPat(str) {
    //code here
    const counts = {x: 0, o: 0};
    const res = str.toLowerCase().split('').reduce((acc, c) => {
        console.log(c);
        acc.x = c==="x"?acc.x+1:acc.x;
        acc.o = c==="o"?acc.o+1:acc.o;
        console.log(acc);
        return acc;
    }, counts); /* ? */

    return counts.x === counts.o;
    console.log(res)
}

function XO2(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}

const XO = str => (str.match(/x/gi) || []).length == (str.match(/o/gi) || []).length;

XO('xo'); /* ? */
XO('oO'); /* ? */
XO('oOxX'); /* ? */
XO('oOx'); /* ? */
XO('aaa'); /* ? */