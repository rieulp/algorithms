function solution(n) {
  var answer = Array.from({ length: n }, () => Array.from({ length: n }, () => 0));
  
  let x = 0;
  let y = 0;
  let val = 1;
  let directionIndex = 0;

  const directions = [
    [0, 1],  // 오른쪽 이동
    [1, 0],  // 아래쪽 이동
    [0, -1], // 왼쪽 이동
    [-1, 0], // 위쪽 이동
  ];


  while (val <= n * n) {
    answer[y][x] = val++;
    
    const [dy, dx] = directions[directionIndex];
    const nextX = x + dx;
    const nextY = y + dy;
    
    if (0 <= nextX && 0 <= nextY && nextX < n && nextY < n && !answer[nextY][nextX]) {
      [x, y] = [nextX, nextY];
    } else {
      directionIndex = (directionIndex + 1) % directions.length;
      [x, y] = [x + directions[directionIndex][1], y + directions[directionIndex][0]];
    }
  }

  return answer;
}