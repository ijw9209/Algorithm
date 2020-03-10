handle = (s) => {

    let reg = /^[0-9]*$/;

    return ((s.length == 4 || s.length == 6) && (reg.test(s))) ? true : false
}

//문자열 다루기

test('문자열다루기', () => {
    expect(handle("1234")).toBeTruthy();
    expect(handle("a234")).toBeFalsy();
})
