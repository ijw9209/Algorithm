solution = n => {
    const answer = [];
    let str = String(n);
    for (let i = 0; i < str.length; i++) {
        answer[i] = Number(str[i]);
    }
    answer.reverse();
    return answer;
}

//자연수 뒤집어 배열로 만들기
test('자연수 뒤집어 배열로 만들기', () => {
    expect(solution(12345)).toEqual([5, 4, 3, 2, 1]);
})