solution = s => {

    const arr = s.split('');
    return arr.sort().reverse().join('');

}

test('문자열 내림차순으로 배치하기', () => {
    expect(solution("Zbcdefg")).toEqual("gfedcbZ");
})


//다른사람풀이

// function solution(s) {
//     return s.split('').sort((a, b) => {
//         if (a > b) return -1;
//         if (b > a) return 1;
//         return 0;
//     }).join('');
// }