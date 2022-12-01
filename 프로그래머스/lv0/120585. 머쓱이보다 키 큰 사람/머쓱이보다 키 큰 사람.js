function solution(array, height) {
    var answer = array.filter((v=>v>height)).length;
    return answer;
}