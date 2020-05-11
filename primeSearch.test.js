solution = n => {
    const answer = [];

    for (let i = 0; i < n + 1; i++) {
        answer.push(true);
    }
    for (let i = 2; i * i < n; i++) {
        if (answer[i]) {
            for (let j = i * i; j <= n; j += i) {
                answer[j] = false;
            }
        }
    }
    answer.splice(0, 2, false, false);
    let cnt = 0;
    for (let i = 0; i < answer.length; i++) {
        if (answer[i]) {
            cnt++;
        }
    }

    return cnt;
}

test('소수 찾기', () => {
    expect(solution(10)).toEqual(4);
    expect(solution(5)).toEqual(3);
})


// function solution(n) {
//     const s = new Set();
//     for(let i=1; i<=n; i+=2){
//         s.add(i);
//     }
//     s.delete(1);
//     s.add(2);
//     for(let j=3; j<Math.sqrt(n); j++){
//         if(s.has(j)){
//              for(let k=j*2; k<=n; k+=j){    
//                 s.delete(k);
//              }
//         }
//     }
//     return s.size;
// }
