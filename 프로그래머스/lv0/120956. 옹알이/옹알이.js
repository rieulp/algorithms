function solution(babbling) {
    var answer = 0;
    const canStr = [/^aya/, /^ye/, /^woo/, /^ma/];
    
    for(let babble of babbling) {
        let str = babble;
        let can = canStr.find(v => v.test(str));
        while(can) {
            str = str.replace(can, '');
            if(can.test(str)) break;
            can = canStr.find(v => v.test(str))
        }
        if(!str) answer++;
    }
    return answer;
}