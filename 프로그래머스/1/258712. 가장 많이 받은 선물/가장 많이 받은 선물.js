function solution(friends, gifts) {
    const giftHistory = {};
    const degree = {};
    const giftCounts = {};

    for (let i = 0; i < gifts.length; i++) {
        const [sender, receiver] = gifts[i].split(" ");
        if (!giftHistory[sender]) giftHistory[sender] = {};
        giftHistory[sender][receiver] = (giftHistory[sender][receiver] ?? 0) + 1;
        degree[sender] = (degree[sender] ?? 0) + 1;
        degree[receiver] = (degree[receiver] ?? 0) - 1;
    }

    for (let i = 0; i < friends.length - 1; i++) {
        for (let j = i + 1; j < friends.length; j++) {
            const a = friends[i];
            const b = friends[j];
            const giftsFromAToB = giftHistory[a]?.[b] ?? 0;
            const giftsFromBToA = giftHistory[b]?.[a] ?? 0;

            if (giftsFromAToB > giftsFromBToA) {
                giftCounts[a] = (giftCounts[a] ?? 0) + 1;
            } else if (giftsFromBToA > giftsFromAToB) {
                giftCounts[b] = (giftCounts[b] ?? 0) + 1;
            } else {
                const degreeA = degree[a] ?? 0;
                const degreeB = degree[b] ?? 0;
                if (degreeA === degreeB) continue;
                if (degreeA > degreeB) giftCounts[a] = (giftCounts[a] ?? 0) + 1;
                else giftCounts[b] = (giftCounts[b] ?? 0) + 1;
            }
        }
    }

    return Math.max(...Object.values(giftCounts), 0);;
}
