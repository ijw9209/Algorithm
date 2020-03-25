function solution(num) {

    return (num % 2 === 0) ? "Even" : "Odd";
}

test('짝수와 홀수', () => {
    expect(solution(3)).toEqual("Odd");
    expect(solution(4)).toBe("Even");
})