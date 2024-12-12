function solution(priorities, location) {
    let answer = 0;

    const taskQueue = priorities.map((priority, loc) => ({ loc, priority }));

    while (taskQueue.length > 0) {
        const current = taskQueue.shift();

        if (taskQueue.some(task => task.priority > current.priority)) {
            taskQueue.push(current);
        } else {
            answer++;
            if (current.loc === location) return answer;
        }
    }

    return answer;
}