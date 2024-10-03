function solution(genres, plays) {
    var answer = [];
    const playNumByGenres = new Map();

    for(let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        if(!playNumByGenres.has(genre)) playNumByGenres.set(genre,{total:0, plays:[]});
        const value = playNumByGenres.get(genre);
        value.total += plays[i];
        value.plays.push([i, plays[i]]);
        value.plays.sort((a,b) => {
            if(a[1]===b[1]) return a[0] - b[0];
            return b[1] - a[1];
        })
    }
    Array.from(playNumByGenres.values())
        .sort((a,b)=>b.total - a.total)
        .forEach(({plays})=>{
        const top2 = plays.slice(0,2);
        answer.push(...top2.map(item=>item[0]))
    });
    return answer;
}