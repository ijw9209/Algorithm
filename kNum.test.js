solution = (array, commands) => {
    const answer = [];
    for (let i = 0; i < commands.length; i++) {
        let arr = array.slice(commands[i][0] - 1, commands[i][1])
        arr.sort(function (a, b) {
            return a - b;
        });
        answer.push(arr[commands[i][2] - 1]);
    }
    return answer;
}


test('k번째수', () => {
    expect(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])).toEqual([5, 6, 3]);
})

// 다른사람

// function solution(array, commands) {
//     return commands.map(v => {
//         return array.slice(v[0] - 1, v[1]).sort((a, b) => a - b).slice(v[2] - 1, v[2])[0];
//     });
// }