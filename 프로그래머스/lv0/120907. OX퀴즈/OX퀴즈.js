function solution(quiz) {
    var answer = [];
    for(q of quiz) {
        const [a, o, b, _, result] = q.split(' ');
        if(o==='+' && Number(a)+Number(b)==result) answer.push("O");
        else if(o==='-' && Number(a)-Number(b)==result) answer.push("O");
        else answer.push("X");
    }
    return answer;
}