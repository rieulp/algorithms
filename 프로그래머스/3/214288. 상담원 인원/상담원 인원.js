function solution(k, n, reqs) {
    var answer = 0;
    const totalWaitTimes = {};
    var mentorEndTimes = {};
    
    // 각 상담 유형별 초기 멘토 종료 시간을 설정
    for (let i = 1; i <= k; i++) {
        mentorEndTimes[i] = [0];
    }
    
    // 총 대기 시간을 계산하는 함수
    const calcTotalWaitTimes = (mentorEndTimes, totalWaitTimes) => {
        for (let consultType in mentorEndTimes) {
            mentorEndTimes[consultType] = mentorEndTimes[consultType].map(() => 0);
            totalWaitTimes[consultType] = 0;
        }

        for (let [start, len, type] of reqs) {
            const endTime = mentorEndTimes[type][0];
            const waitTime = Math.max(0, endTime - start);
            totalWaitTimes[type] += waitTime;
            mentorEndTimes[type][0] = start + len + waitTime;
            mentorEndTimes[type].sort((a, b) => a - b);
        }

        return Object.values(totalWaitTimes).reduce((acc, cur) => acc + cur, 0);
    };

    // 멘토 수가 남아있는 동안 반복
    while (n >= k) {
        // 각 상담 유형별 초기화
        for (let consultType in mentorEndTimes) {
            mentorEndTimes[consultType] = mentorEndTimes[consultType].map(() => 0);
            totalWaitTimes[consultType] = 0;
        }

        // 각 요청에 대해 대기 시간 계산
        for (let [start, len, type] of reqs) {
            const endTime = mentorEndTimes[type][0];
            const waitTime = Math.max(0, endTime - start);
            totalWaitTimes[type] += waitTime;
            mentorEndTimes[type][0] = start + len + waitTime;
            mentorEndTimes[type].sort((a, b) => a - b);
        }

        // 대기 시간이 가장 적게 증가하는 상담 유형에 멘토 추가
        let addMentorType = 0;
        let minWait = Infinity;

        for (let i = 1; i <= k; i++) {
            const newMentorEndTimes = { ...mentorEndTimes, [i]: [...mentorEndTimes[i], 0] };
            const curWaitTime = calcTotalWaitTimes(newMentorEndTimes, { ...totalWaitTimes });
            if (curWaitTime <= minWait) {
                minWait = curWaitTime;
                addMentorType = i;
            }
        }

        mentorEndTimes[addMentorType].push(0);
        n--;
    }

    // 최종 대기 시간 합산
    answer = Object.values(totalWaitTimes).reduce((acc, cur) => acc + cur, 0);

    return answer;
}