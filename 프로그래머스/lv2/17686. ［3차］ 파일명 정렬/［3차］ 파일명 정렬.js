function solution(files) {
    var answer = [];
    const arr = [];
    
    for(let i=0; i<files.length; i++) {
        const file = files[i];
        const num = file.split(/[^0-9]+/).filter(v=>v).shift().substring(0,5);
        const head = file.substring(0, file.indexOf(num));
        arr.push([i, head.toLowerCase(), parseInt(num,10)])
    }
    
    arr.sort(([i1,h1,n1],[i2, h2, n2])=>{
        if(h1<h2) return -1;
        else if(h1>h2) return 1;
        else {
            if(n1===n2) return i1-i2;
            else return n1-n2;
        }
    });
    
    arr.forEach(v=> answer.push(files[v[0]]));
    
    return answer;
}