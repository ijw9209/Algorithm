solution = n => {

    const subak = ["수", "박"]
    let answer = "";

    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            answer += subak[0];
        } else {
            answer += subak[1];
        }
    }
    return answer;
}

test('수박수박수박수박수박수?', () => {
    expect(solution(3)).toEqual("수박수");
    expect(solution(4)).toEqual("수박수박");
})


// function waterMelon(n){
//     var result = "수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박수박"
//     //함수를 완성하세요

//     return result.substring(0,n);
//   }

//   // 실행을 위한 테스트코드입니다.
//   console.log("n이 3인 경우: "+ waterMelon(3))
//   console.log("n이 4인 경우: "+ waterMelon(4))
// }

//와 이런생각도하는구나 했다

// function waterMelon(n){
//     var result = "수박";
//      result = result.repeat(n-1).substring(0,n);
//     //함수를 완성하세요

//     return result;
//   }

//   // 실행을 위한 테스트코드입니다.
//   console.log("n이 3인 경우: "+ waterMelon(3))
//   console.log("n이 4인 경우: "+ waterMelon(4))

//substring을 사용하여 풀면 훨씬더 효율적이였을텐데 앞으로는 자주사용해야겠다.