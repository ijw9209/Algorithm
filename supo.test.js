solution = (answers) => {

    const one = [1, 2, 3, 4, 5];
    const two = [2, 1, 2, 3, 2, 4, 2, 5];
    const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    const cnt = [0, 0, 0];

    for (let i = 0; i < answers.length; i++) {
        if (one[i % 5] === answers[i]) cnt[0]++;
        if (two[i % 8] === answers[i]) cnt[1]++;
        if (three[i % 10] === answers[i]) cnt[2]++;
    }
    let max = Math.max(...cnt);
    let answer = [];
    for (let i = 0; i < cnt.length; i++) {
        if (cnt[i] === max) {
            answer.push(i + 1);
        }
    }
    return answer;
}

test('모의고사', () => {
    expect(solution([1, 2, 3, 4, 5])).toEqual([1]);
    expect(solution([1, 3, 2, 4, 2])).toEqual([1, 2, 3]);
})


//다른사람


// function solution(answers) {
//     var answer = [];
//     var a1 = [1, 2, 3, 4, 5];
//     var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
//     var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

//     var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
//     var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
//     var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
//     var max = Math.max(a1c,a2c,a3c);

//     if (a1c === max) {answer.push(1)};
//     if (a2c === max) {answer.push(2)};
//     if (a3c === max) {answer.push(3)};


//     return answer;
// }