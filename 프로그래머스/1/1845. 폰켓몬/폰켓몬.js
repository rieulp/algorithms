function solution(nums) {
    var answer = 0;
    const poketmon = new Map();
    nums.forEach((num)=>{
        poketmon.set(num, (poketmon.get(num)??0) + 1);
    })
    const half = nums.length / 2;
    answer = Math.min(half, poketmon.size);
    return answer;
}