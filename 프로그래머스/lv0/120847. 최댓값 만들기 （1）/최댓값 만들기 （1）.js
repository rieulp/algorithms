function solution(numbers) {
    var sortedArray = [...numbers].sort((a,b)=>a-b);
    var answer = sortedArray.pop()*sortedArray.pop();
    return answer;
}