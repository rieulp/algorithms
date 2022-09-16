function solution(survey, choices) {
    var answer = '';

    const indicators = ["RT","CF","JM","AN"];
    const type={};
    
    for(let i = 0; i< survey.length; i++) {
        const [d,a] = [...survey[i]];
        
        if(!(d in type)) type[d]=0;
        if(!(a in type)) type[a]=0;
        
        const score = choices[i]-4;
        
        if(score<0) type[d] += Math.abs(score);
        else type[a] += Math.abs(score);
    }
    
    for(indi of indicators) {
        const [a,b] = [...indi];
        
        if((type[a]||0) < (type[b]||0)) answer+=b;
        else answer+=a;
    }
    
    return answer;
}