function solution(arr)
{
    var answer = [];

    for(const val of arr) {
        const lastValue = answer[answer.length - 1];
        if(val!==lastValue) answer.push(val)
    }
    
    return answer;
}