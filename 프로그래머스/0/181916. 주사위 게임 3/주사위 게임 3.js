function solution(a, b, c, d) {
    const nums = [a, b, c, d];
    const numsMap = nums.reduce((acc, num) => {
        acc.set(num, (acc.get(num) || 0) + 1);
        return acc;
    }, new Map());

    const len = numsMap.size;

    if (len === 1) return 1111 * nums[0];
    if (len === 2) {
        const [[p, countP], [q]] = [...numsMap.entries()].sort((a, b) => b[1] - a[1]);
        if (countP === 2) return (p + q) * Math.abs(p - q);
        return Math.pow(10 * p + q, 2);
    }
    if (len === 3) {
        const [q, r] = [...numsMap.keys()].filter(key => numsMap.get(key) === 1);
        return q * r;
    }
    return Math.min(...nums);
}