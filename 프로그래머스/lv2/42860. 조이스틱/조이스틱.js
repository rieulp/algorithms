function solution(name) {
    var answer = 0;
    var a_code = 'A'.charCodeAt();
    var z_code = 'Z'.charCodeAt();
    
    var n = name.length;
    var min = Number.MAX_SAFE_INTEGER;
    
    for(let i=0;i<n;i++){
        var code = name[i].charCodeAt();
        answer+=Math.min(code-a_code,z_code-code+1)
        let j=i+1;
        
        while(j<n&&name[j]==='A') j++;
        
        min = Math.min(min,i*2+(n-j),(n-j)*2+i);
    }
    
    answer+=min;
    
    return answer;
}