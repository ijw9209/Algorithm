solution = (arr1, arr2) => {

    const answer = arr1.map((a, i) => a.map((b, j) => b + arr2[i][j]));

    return answer;


}

test('같은 숫자는 싫어', () => {
    expect(solution([[1, 2], [2, 3]], [[3, 4], [5, 6]])).toEqual([[4, 6], [7, 9]]);
})