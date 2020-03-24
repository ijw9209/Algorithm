function solution(arr) {
    let sum = 0;
    for (let value of arr) {
        sum += value;
    }
    return sum / arr.length;
}

test('평균구하기', () => {
    expect(solution([1, 2, 3, 4])).toBe(2.5);
    expect(solution([5, 5])).toEqual(5);
})


//다른사람풀이
function average(array) {
    return array.reduce((a, b) => a + b) / array.length;
}