function solution(participant, completion) {

    var answer = Array.from(participant);

    participant.sort();
    completion.sort();

    for (var i = 0; i <= completion.length; i++) {
        if (participant[i] !== completion[i]) {
            var arr = answer.slice(i, 1)
            //  answer.slice(i, 1);
            console.log(arr);
        }
        return arr.toString()
    }

}

test('완주하지 못한 선수', () => {
    expect(solution(["leo", "kiki", "eden"], ["eden", "kiki"])).toBe("leo");
    //expect(handle("a234")).toBe();
})