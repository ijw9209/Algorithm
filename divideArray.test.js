solution = (arr, divisor) => {

    let answer = [];

    answer = arr.filter(item => item % divisor === 0)

    answer.sort(function (a, b) { return a - b });
    if (answer.length === 0) {
        answer.push(-1);
    }
    return answer;
}



test('나누어 떨어지는 숫자 배열', () => {
    expect(solution([5, 9, 7, 10], 5)).toEqual([5, 10]);
    expect(solution([2, 36, 1, 3], 1)).toEqual([1, 2, 3, 36]);
    expect(solution([3, 2, 6], 10)).toEqual([-1]);
})