solution = n => {
    let answer = 0;
    const arr = [];
    let str = String(n);
    for (let i = 0; i < str.length; i++) {
        arr[i] = str[i];
    }
    const sortArr = arr.sort(function (a, b) {
        return b - a;
    });

    answer = sortArr.join("");
    return Number(answer);
}

test('정수 내림차순으로 배치하기', () => {
    expect(solution(118372)).toEqual(873211);
})


//다른사람
// function solution(n) {
//     const newN = n + "";
//     const newArr = newN
//       .split("")
//       .sort()
//       .reverse()
//       .join("");

//     return +newArr;
//   }
