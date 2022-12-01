function solution(angle) {
    var answer = angle===90?2:angle<90?1:angle<180?3:4;
    return answer;
}