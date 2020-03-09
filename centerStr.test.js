Center = (str) => {
    let answer = ''
    const i = str.length / 2

    if (str.length % 2 == 0) {
        answer = str[i - 1] + str[str.length / 2]
        return answer
    } else {
        answer = str[Math.floor(str.length / 2)]
        return answer
    }
}

//가운데 글자 반환하기
test('centerStr', () => {
    expect(Center("abcdef")).toBe("cd");
    expect(Center("abcde")).toBe("c");
})