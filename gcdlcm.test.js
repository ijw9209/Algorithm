solution = (n, m) => {
    const answer = [];

    const arr1 = measure(n);
    const arr2 = measure(m);
    const fillter = arr1.filter((item) => arr2.indexOf(item) > -1);

    answer[0] = Math.max.apply(null, fillter);
    answer[1] = n * m / answer[0];
    return answer;
}

measure = n => {
    const arr = [];
    let num = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            arr[num] = i;
            num++;
        }
    }
    return arr;
}

test('최대공약수와 최소공배수', () => {
    expect(solution(3, 12)).toEqual([3, 12]);
    expect(solution(2, 5)).toEqual([1, 10]);
})

