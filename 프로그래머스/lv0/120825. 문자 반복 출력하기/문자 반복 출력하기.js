function solution(my_string, n) {
    var answer = '';
    for(str of my_string) answer+=str.repeat(n)
    return answer;
}