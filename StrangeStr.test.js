function solution(s) {

    var arr = s.split(" ");
    var result = "";
    var len = arr.length;
    var arr2 = [];
    for (var i = 0; i < len; i++) {

        arr2[i] = upper(arr[i]);
    }
    result = arr2.join(' ');
    console.log(result);
    return result;
}

function upper(arr1) {
    var str = "";
    for (var i = 0; i < arr1.length; i++) {
        if (i % 2 === 0) {
            str += arr1[i].toUpperCase();
        } else {
            str += arr1[i].toLowerCase();
        }
    }
    return str;
}

test('이상한 문자 만들기', () => {
    expect(solution("try hello world")).toEqual("TrY HeLlO WoRlD");
})

//띄어쓰기에 걸리면 0으로 다시 세어야하기때문에 힘들었다 split으로 자르면
//공백이 없어지기때문에 upper함수를 호출하는곳에 공백을추가하면 맨뒤칸도 공백이 추가되어
//계속 실패하였다. 그래서 또다른 배열에담고 join(' ')을 사용하여 다시 묶었더니 정확히 공백이들어가졌다
//지금은 지저분해서 다시한번풀어보며 좀더 나은 코드를 작성해야겠다.


// 다른사람

// function toWeirdCase(s){
//     //함수를 완성해주세요
//     return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})

//   }

// 다른사람 2

// function toWeirdCase(s){
//     var result = "";
//       var num = 0;

//     console.log(s.length);

//     for(var i = 0; i < s.length; i++){
//      if(s.charAt(i) == " "){
//       num = 0;
//       result += " ";
//       continue;
//      }
//       else if(num % 2 == 0){
//         result += (s.charAt(i)).toUpperCase();
//         num++;
//       }
//       else{
//         result += (s.charAt(i)).toLowerCase();
//         num++; 
//       }
//     }
// }