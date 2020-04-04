solution = x => {
    var answer = false;

    let str = x + "";
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]);
    }
    if (x % Number(sum) === 0) {
        return true;
    }
    return answer;
}

test('하사드수', () => {
    expect(solution(10)).toBeTruthy();
    expect(solution(12)).toBeTruthy();
    expect(solution(11)).toBeFalsy();
    expect(solution(13)).toBeFalsy();
});

