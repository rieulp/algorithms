function solution(distance, rocks, n) {
    var answer = 0;
    rocks.push(0,distance);
    rocks.sort((a,b)=>a-b);
    let lt=1,rt=distance;
    
    while(lt<=rt){
        let mid = parseInt((lt+rt)/2);
        let cur=0;
        let cnt=0;
        for(let i=1;i<rocks.length;i++){
            if(rocks[i]-rocks[cur]<mid) cnt++;
            else cur=i;
        }
        if(cnt>n)rt=mid-1;
        else {
            lt = mid+1;
            answer = Math.max(answer,mid);
        }
    }
    return answer;
}