// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// 제한 조건
// s는 길이 4 이상, 20이하인 문자열입니다.


solution = phone_number => {
    let answer = '';

    const hide = phone_number.length - 4;
    for (let i = 0; i < phone_number.length; i++) {
        if (i < hide) {
            answer += "*";
        } else {
            answer += phone_number[i];
        }
    }
    return answer;
}

test('핸드폰 번호 가리기', () => {
    expect(solution("01033334444")).toBe("*******4444");
    expect(solution("027778888")).toBe("*****8888");
})


//다른사람

// function hide_numbers(s) {
//     return s.replace(/\d(?=\d{4})/g, "*");
//   }

//   // 아래는 테스트로 출력해 보기 위한 코드입니다.
//   console.log("결과 : " + hide_numbers('01033334444'));


//function hide_numbers(s){
//     var result = "*".repeat(s.length - 4) + s.slice(-4);
//     //함수를 완성해주세요

//     return result;
//   }

//   // 아래는 테스트로 출력해 보기 위한 코드입니다.
//   console.log("결과 : " + hide_numbers('01033334444'));