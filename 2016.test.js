solution = (a, b) => {

    let day = "2016-" + a + "-" + b;
    const week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let answer = week[new Date(day).getDay()];

    return answer;
}

test('2016년', () => {
    expect(solution(5, 24)).toEqual("TUE");
})

//function getDayName(a,b){
//     return new Date(2016,a-1,b).toString().slice(0,3).toUpperCase();
// }


// function getDayName(a,b){
//     var date = new Date(2016, (a - 1), b);
//       return date.toString().slice(0, 3).toUpperCase();
//   }
