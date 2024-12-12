function solution(genres, plays) {
    const genreData = {};
    genres.forEach((genre, i) => {
        if (!genreData[genre]) genreData[genre] = { totalPlays: 0, songs: [] };
        genreData[genre].totalPlays += plays[i];
        genreData[genre].songs.push({ id: i, playCount: plays[i] });
    });

    const sortedGenres = Object.values(genreData)
        .sort((a, b) => b.totalPlays - a.totalPlays);

    const answer = [];
    sortedGenres.forEach(({ songs }) => {
        songs.sort((a, b) => {
            if (b.playCount === a.playCount) return a.id - b.id;
            return b.playCount - a.playCount;
        });
        answer.push(...songs.slice(0, 2).map(song => song.id));
    });

    return answer;
}