solution = (n, lost, reserve) => {

    var answer = 0;


    const people = [];
    let exist = true;
    for (let i = 0; i < n; i++) {
        people[i] = exist;
    }

    for (let j = 0; j < lost.length; j++) {

        people[lost[j] - 1] = false;
    }

    console.log(people);
    console.log(reserve);
    for (let k = 0; k < reserve.length; k++) {
        if (people[reserve[k] - 1]) {
            console.log(people[reserve[k] - 1]);
        } else {
            people[reserve[k] - 1] = true;
            reserve[k] = 0;
        }
    }
    console.log(reserve);
    return answer;

}




test('체육복', () => {
    expect(solution(5, [2, 4], [1, 3, 5])).toEqual(5);
    expect(solution(5, [2, 4], [3])).toEqual(4);
    expect(solution(3, [3], [1])).toEqual(2);
})