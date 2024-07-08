function solution(bandage, health, attacks) {
    var answer = health;
    const [t, x, bonus] = bandage;
    for(let i = 0; i<attacks.length; i++) {
        const [attackTime, damage] = attacks[i];
        const lastAttackTime = i>0 ? attacks[i-1][0] : 0;
        const restoreSec = Math.abs(attackTime - lastAttackTime - 1);
        const bonusVal = Math.floor(restoreSec/t);
        const val = restoreSec * x + bonus * bonusVal;
        answer = Math.min(answer+val, health) - damage;
        if(answer<= 0) return -1;
    }
    return answer;
}
