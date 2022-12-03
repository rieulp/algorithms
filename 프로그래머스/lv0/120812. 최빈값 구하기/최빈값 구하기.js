function solution(array) {
    let max = []
    const map = new Map();
    for(v of array) {
        const num = (map.get(v)||0) + 1;
        map.set(v, num);
        max = max.filter((item)=>item[1]>=num);
        if(max.length===0) max.push([v, num]);
        else if(max[0][1]===num) max.push([v, num]);
    }
    if(max.length>1) return -1
    return max[0][0];
}