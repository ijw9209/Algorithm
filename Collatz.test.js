solution = (num) => {
    let cnt = 0;
    while (true) {
        if (cnt > 500) {
            return -1;
        } else if (num !== 1) {
            (num % 2 === 0) ? num = num / 2 : num = num * 3 + 1
        } else if (num === 1) {
            return cnt;
        }
        cnt++;
    }
}

test('콜라츠 추측', () => {
    expect(solution(6)).toEqual(8);
    expect(solution(16)).toEqual(4);
    expect(solution(626331)).toEqual(-1);
})

//다른사람의 풀이
//function collatz(num,count = 0) {
//     return num == 1 ? (count >= 500 ? -1 : count) : collatz(num % 2 == 0 ? num / 2 : num * 3 + 1,++count);
// }