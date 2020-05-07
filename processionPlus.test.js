solution = (arr1, arr2) => {


    var answer = [];
    let len1 = arr1.length;
    let len2 = arr1[0].length;

    for (let i = 0; i < len1; i++) {
        answer.push([]);
    }

    for (let i = 0; i < len1; i++) {
        for (let j = 0; j < len2; j++) {
            answer[i][j] = arr1[i][j] + arr2[i][j];
        }
    }

    return answer;

}

test('행렬의 덧셈', () => {
    expect(solution([[1, 2], [2, 3]], [[3, 4], [5, 6]])).toEqual([[4, 6], [7, 9]]);
})