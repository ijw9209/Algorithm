function solution(n) {
    var answer = 0;


    for (var i = 1; i <= n; i++) {
        if (n % i === 0) {
            answer += i;
        }
    }
    // 2,3,4,6 
    return answer;
}

test('약수의 합 구하기', () => {
    //expect(solution("12")).toBe(28);
    expect(solution("5")).toBe(6);
})

//일단 약수의 개수를 구해서 하는건가 싶어서 갯수로 해봣는데 계속 실패하였다
//그래서 살짝 힌트를 봤더니 들어온값에 나머지가 0 이면 약수라는것을 알아내었다
//아직 사고방식이 많이부족한것같다.


//다른사람

function sumDivisor(num) {
    //1과 자기 자신을 약수로 가진다.
    var answer = 1 + num;

    for (let i = 2; i < num; i++) {
        if (num % i == 0)
            answer += i
    }

    return answer;
}

console.log(sumDivisor(12));


// 2

let sumDivisor = num => {

    let answer = 0,
        i = 1,
        j = num % 2 == 0 ? 1 : 2

    for (i; i < num; i = i + j) if (num % i == 0) answer += i

    return answer + num
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(sumDivisor(12));