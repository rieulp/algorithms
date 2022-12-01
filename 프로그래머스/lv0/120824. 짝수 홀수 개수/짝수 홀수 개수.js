function solution(num_list) {
    var answer = Array(2).fill(0);
    for(num of num_list) answer[num%2]++;
    return answer;
}