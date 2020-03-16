//나의풀이

function solution(s) {

    var lower = s.toLowerCase()
    var pcnt = 0;
    var ycnt = 0;
    for (var i = 0; i < lower.length; i++) {
        if (lower[i] === 'p') {
            pcnt++;
        } else if (lower[i] === 'y') {
            ycnt++;
        }
    }
    if (pcnt === ycnt) {
        return true;
    } else {
        return false;
    }
}


//다른사람풀이
// function solution(s) {
//     return s.match(/p/ig).length == s.match(/y/ig).length;
// }

// function solution(s) {
//     //함수를 완성하세요
//     return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
// }


test('문자열 내 p와 y의 개수', () => {
    expect(solution("pPoooyY")).toBeTruthy();
    expect(solution("Pyy")).toBeFalsy();
})