solution = n => {

    const answer = String(n);
    let result = 0;
    for (const element of answer) {
        result += Number(element)
    }
    return result;

}

test('자릿수 더하기', () => {
    expect(solution(123)).toEqual(6);
    expect(solution(987)).toEqual(24);
})


//다른사람

// function solution(n){
//     
//     return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
// }


//다른사람2

// function solution(n)
// {
//     var a = (n + '').split('');
//     var b = 0;
//     for(var i = 0; i < a.length; ++i) {
//         b += parseInt(a[i]);
//     }
//     return b;
//     //return n.toString().split('').reduce((a, b) => (a * 1) + (b * 1));
// }
