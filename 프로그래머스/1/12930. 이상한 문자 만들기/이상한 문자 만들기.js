function solution(s) {
    var answer;
    
    const strings = s.split(' ');
    const transformedStrings = strings.map((v)=>[...v].map((v, i)=>i%2===0 ? v.toUpperCase() : v.toLowerCase()).join(''))
    answer = transformedStrings.join(' ')
    
    return answer;
}