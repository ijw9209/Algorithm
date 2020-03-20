//나의풀이
function solution(s) {
    let answer = 0;

    answer = Number(s);
    return answer;
}


test('문자열을 정수로바꾸기', () => {
    //expect(solution("1234")).toBe(1234);
    expect(solution("-1234")).toBe(-1234);
})

// function solution(str) {
//     return str / 1
// }

// function solution(str) {
//     return +str;
// }