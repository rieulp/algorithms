function solution(clothes) {
    var answer = 0;
    const closet = new Map();
    clothes.forEach(([name, category])=>{
        closet.set(category, (closet.get(category) ?? 0) + 1);
    });
    answer = [...closet.values()].reduce((acc,cur)=> acc * (cur + 1), 1) - 1
    return answer;
}