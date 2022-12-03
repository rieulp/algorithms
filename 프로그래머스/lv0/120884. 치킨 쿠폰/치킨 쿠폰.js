function solution(chicken) {
    var answer = 0;
    let cupon = chicken;
    // chicken -= cupon*10;
    while(cupon>=10) {
        const free = Math.floor(cupon/10);
        answer+=free;
        cupon -= free*9
    }
    return answer;
}