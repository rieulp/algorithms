function solution(id_list, report, k) {
    var answer = Array(id_list.length).fill(0);
    var id_report = {};
    id_list.forEach(id=> id_report[id]=[]);
    report.forEach((rp)=>{
        const [from,to] = rp.split(' ');
        const fromIdx = id_list.indexOf(from);
        if(!id_report[to].includes(fromIdx)){
             id_report[to].push(fromIdx);
        }
    })
    
    for(id in id_report) {
        if(id_report[id].length>=k){
            for(idx of id_report[id])answer[idx]++;
        }
    }
    
    return answer;
}