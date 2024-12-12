function solution(numbers, target) {
    var answer = 0;
    function dfs(index, value) {
        if(index===numbers.length ) {
            if(target===value) answer++;
            return;
        }
        dfs(index+1, value+numbers[index])
        dfs(index+1, value-numbers[index])
    }
    dfs(0, 0);
    return answer;
}