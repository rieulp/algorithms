function solution(arrows) {
    const direction = [
        [0, 1], [1, 1], [1, 0], [1, -1], 
        [0, -1], [-1, -1], [-1, 0], [-1, 1]
    ];

    let visited = new Set();
    let edges = new Set();
    let x = 0, y = 0;
    visited.add(`${x},${y}`);
    let rooms = 0;

    for (let arrow of arrows) {
        for (let i = 0; i < 2; i++) {
            let nx = x + direction[arrow][0];
            let ny = y + direction[arrow][1];
            if (visited.has(`${nx},${ny}`) && !edges.has(`${x},${y},${nx},${ny}`)) {
                rooms += 1;
            }
            visited.add(`${nx},${ny}`);
            edges.add(`${x},${y},${nx},${ny}`);
            edges.add(`${nx},${ny},${x},${y}`);
            x = nx;
            y = ny;
        }
    }

    return rooms;
}
