solution = arr => {
    if (arr.length <= 2) {
        return [-1];
    }

    let min = Math.min.apply(null, arr);
    let idx = arr.indexOf(min);
    arr.splice(idx, 1);
    return arr;
}

test('제일 작은 수 제거하기', () => {
    expect(solution([4, 3, 2, 1])).toEqual([4, 3, 2]);
    expect(solution([10])).toEqual([-1]);
})


// 다른사람 1

// function solution(arr) {
//     arr.splice(arr.indexOf(Math.min(...arr)),1);
//     if(arr.length<1)return[-1];
//     return arr;
// }


// 다른사람 2

// function solution(arr) {
//     var a=Math.min.apply(null,arr);
//     arr.splice(arr.indexOf(a),1);

//     if(arr[0]==undefined)
//         return [-1];
//     else
//         return arr;
// }