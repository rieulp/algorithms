function solution(n, k) {
    var answer = -1;
    
    const kNumber = n.toString(k);
    const primeNum = kNumber.split(/0+/gi).filter(v=>isPrime(parseInt(v)))
    
    answer = primeNum.length;
    
    return answer;
}

function isPrime(n) {
    if(isNaN(n)) return false
    if(n<2) return false;
    for(let i=2; i<=Math.sqrt(n); i++) {
        if(n%i===0) return false
    }
    return true;
}