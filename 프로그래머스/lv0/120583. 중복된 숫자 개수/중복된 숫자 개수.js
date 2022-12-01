function solution(array, n) {
    var answer = array.filter(v=>v===n).length;
    return answer;
}