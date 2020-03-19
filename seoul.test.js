function solution(seoul) {
    var answer = '';

    var i = seoul.indexOf("Kim");
    return "김서방은 " + i + "에 있다";

    //1번
    // for (var i = 0; i < seoul.length; i++) {
    //     if (seoul[i] === 'Kim') {
    //         return "김서방은 " + i + "에 있다"
    //     }
    // }
}
test('서울에서 김서방 찾기', () => {
    expect(solution(["Jane", "Kim"])).toBe("김서방은 1에 있다")
})


//문제 String형 배열 seoul의 element중 Kim의 위치 x를 찾아, 김서방은 x에 있다는 String을 반환하는 함수, solution을 완성하세요.
// seoul에 Kim은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.