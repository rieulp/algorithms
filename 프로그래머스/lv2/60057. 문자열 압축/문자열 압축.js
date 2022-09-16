function solution(s) {
    let answer = Number.MAX_SAFE_INTEGER;
    
    for(let i=1; i<=s.length/2+1; i++){
        let unit='',str='';
        let num=0,j=0;
        
        for(j=0; j<s.length/i+1; j++){
            let tmp = s.slice(j*i,j*i+i);
            
            if(unit===''||unit===tmp) num++;
            else{
                str+=(num>1?num:'')+unit;
                num=1;
            }
            
            unit = tmp;
        }
        
        answer=Math.min(answer,str.length);
    }
    
    return answer;
}