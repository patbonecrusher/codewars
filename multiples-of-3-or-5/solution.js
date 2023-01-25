function solution(number){
    return [...Array(number<0?0:number).keys()]
        .filter(n => n%3==0 || n%5==0)
        .reduce((a, b) => a + b, 0)
}

function solution3(number){
    return number<0 ? 0 : [...Array(number).keys()]
        .filter(n => n%3==0 || n%5==0)
        .reduce((a, b) => a + b)
}

solution2 = n=> n<=0?0:Array.from({length: n}, (_,i) => (i%3==0||i%5==0)?i:0).reduce((x,y)=>x+y)

// solution(5)

solution(16) //?
solution(-1) //?

solution2(16) //?
solution2(-1) //?

solution3(16) //?
solution3(-1) //?
