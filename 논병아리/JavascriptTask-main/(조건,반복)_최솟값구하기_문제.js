/* 1. 최솟값 구하기 */

function answer(x, y) {
  let min;
  // 코드 구현
  min = Math.min(x , y);
  return min;
}


let input = [
  [16, 3],
  [-3, 1],
  [1000, 525],
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i][0], input[i][1])}`);
}

// 결과
// #1 3
// #2 -3
// #3 525