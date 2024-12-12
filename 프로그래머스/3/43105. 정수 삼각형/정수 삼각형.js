function solution(triangle) {
    const n = triangle.length;

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < triangle[i].length; j++) {
            const left = j > 0 ? triangle[i - 1][j - 1] : 0; // 왼쪽에서 내려오는 값
            const right = j < triangle[i - 1].length ? triangle[i - 1][j] : 0; // 오른쪽에서 내려오는 값
            triangle[i][j] += Math.max(left, right); // 더 큰 값을 선택
        }
    }

    return Math.max(...triangle[n - 1]); // 마지막 행에서 최대값 반환
}