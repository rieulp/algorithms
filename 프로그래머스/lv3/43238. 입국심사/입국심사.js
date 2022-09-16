function solution(n, times) {
    let lt=Math.min(...times),rt=Math.max(...times)*n;
    
    while(lt<=rt){
        let mid=parseInt((rt+lt)/2);
        let max=0,cnt=0;
        
        for(x of times){
            let tmp = parseInt(mid/x);
            cnt+=tmp;
            tmp*=x;
            
            if(max<tmp)max=tmp;
        }
        
        if(cnt>=n) rt=mid-1;
        else lt=mid+1;
    }
    
    return lt;
}