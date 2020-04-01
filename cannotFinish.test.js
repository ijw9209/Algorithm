solution = (participant, completion) => {

    const part = participant.sort();
    const com = completion.sort();

    for (let i = 0; i < part.length; i++) {
        if (part[i] !== com[i]) {
            return part[i]
        }
    }
}

test('완주하지 못한 선수', () => {
    expect(solution(["leo", "kiki", "eden"], ["kiki", "eden"])).toEqual("leo");
})


//다른사람 1


// function solution(participant, completion) {
//     /*
//     for(let i in participant) {
//         if(completion.includes(participant[i]) == false) return participant[i];
//         completion.splice(completion.indexOf(participant[i]), 1);
//     }
//     */

//     participant.sort();
//     completion.sort();

//     for(let i in participant) {
//         if(participant[i] !== completion[i]) return participant[i];
//     }
// }
