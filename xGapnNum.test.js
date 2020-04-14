solution = (x, n) => {
    var answer = [];

    for (let i = 1; i <= n; i++) {
        answer[i] = x * i;
    }
    answer.splice(0, 1);
    return answer;
}

test('x만큼 간격이 있는 n개의 숫자', () => {
    expect(solution(2, 5)).toEqual([2, 4, 6, 8, 10]);
    expect(solution(4, 3)).toEqual([4, 8, 12]);
    expect(solution(-4, 2)).toEqual([-4, -8]);
})
