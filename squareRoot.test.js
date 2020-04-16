solution = n => {

    const num = Math.sqrt(n);
    if (Number.isInteger(num)) {
        return Math.pow(num + 1, 2);
    } else {
        return -1
    }
}

test('정수제곱근판별', () => {
    expect(solution(121)).toEqual(144);
    expect(solution(3)).toEqual(-1);
})