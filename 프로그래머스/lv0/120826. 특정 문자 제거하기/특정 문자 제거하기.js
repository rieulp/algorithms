function solution(my_string, letter) {
    var answer = my_string.replace(new RegExp(letter,'g'),'');
    return answer;
}