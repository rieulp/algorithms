function comb(arr, score, map,start){
    var key = arr.join('');
    map[key]?map[key].push(score):map[key]=[score];
    for(let i=start;i<arr.length;i++){
        let combiArr = [...arr];
        combiArr[i]='-';
        comb(combiArr,score,map,i+1);
    }
}

function solution(info, query) {
    var answer = [];
    var map={};
    for(let i=0;i<info.length;i++){
        let inf = info[i].split(' ');
        let score = +inf.pop();
        comb(inf,score,map,0);
    }
    
    for(key in map) map[key].sort((a,b)=>b-a);
    
    for(qr of query){
        var key = qr.replace(/ and /g,' ').split(' ');
        var score = +key.pop();
        key=key.join('');
        var scores=map[key]||[];
        var lt=0,rt = scores.length-1;
        let mid;
        while(lt<=rt){
             mid=parseInt((lt+rt)/2);
            if(scores[mid]>=score) lt=mid+1;
            else rt=mid-1;
        }
        answer.push(lt)
    }
    return answer;
}