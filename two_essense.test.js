
function solution(a, b) {

    let answer = 0;

    //다른사람
    //return (a+b)*(Math.abs(b-a)+1)/2


    let sum = 0;
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        sum += i;
    }
    return sum;
    //나..
    // if (a < b) {
    //     for (let i = a; i <= b; i++)
    //         answer += i;
    // } else {
    //     for (let i = b; i <= a; i++) {
    //         answer += i;
    //     }
    // }
    // if (a === b) {
    //     answer = a;
    // }
    // return answer;
}

test('두 정수사이의 합', () => {
    expect(solution(3, 5)).toBe(12);
    expect(solution(5, 3)).toBe(12);
    expect(solution(3, 3)).toBe(3);
});