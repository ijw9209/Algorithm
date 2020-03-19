// function solution(arr) {

//     let answer = [];

//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] !== arr[i + 1]) {
//             answer[i] = arr[i]
//         }
//     }

//     function isUndefiend(value) {
//         return value !== undefined;
//     }

//     var filter = answer.filter(isUndefiend);
//     return filter;

// }

function solution(arr) {
    let answer = [];
    var j = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) {
            answer[j] = arr[i]
            j++
        }
    }
    return answer;
}

test('같은 숫자는 싫어', () => {
    expect(solution([1, 1, 3, 3, 0, 1, 1])).toEqual([1, 3, 0, 1]);
    expect(solution([4, 4, 4, 3, 3])).toEqual([4, 3]);
})


// function solution(arr)
// {
//     return arr.filter((val,index) => val != arr[index+1]);
// }


// function solution(arr) {
//     var answer = [arr[0]];

//     for (let i=1; i<arr.length; i++) {
//         if (answer[answer.length - 1] !== arr[i]) {
//             answer.push(arr[i]);
//         }
//     }

//     return answer;
// }