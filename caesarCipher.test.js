solution = (s, n) => {
    let answer = '';

    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) === 32) {
            answer += ' ';
        } else if (s.charCodeAt(i) + n > 122) {
            answer += String.fromCharCode(s.charCodeAt(i) + n - 26);
        } else if (s.charCodeAt(i) + n > 90 && s.charCodeAt(i) <= 90) {
            answer += String.fromCharCode(s.charCodeAt(i) + n - 26);
        } else {
            answer += String.fromCharCode(s.charCodeAt(i) + n);
        }
    }

    return answer;

}


test('시저 암호', () => {
    expect(solution("AB", 1)).toEqual("BC");
    expect(solution("z", 1)).toEqual("a");
    expect(solution("a B z", 4)).toEqual("e F d");
})