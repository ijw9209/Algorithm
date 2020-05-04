solution = (strings, n) => {
    strings.sort((a, b) => {
        if (a[n] === b[n]) {
            return a.localeCompare(b);
        } else {
            return a[n].localeCompare(b[n]);
        }
    });

    return strings;
}


test('문자열 내 마음대로 정렬하기', () => {
    expect(solution(["sun", "bed", "car"], 1)).toEqual(["car", "bed", "sun"]);
    expect(solution(["abce", "abcd", "cdx"], 2)).toEqual(["abcd", "abce", "cdx"]);
})