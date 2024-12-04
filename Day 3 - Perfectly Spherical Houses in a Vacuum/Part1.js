const fs = require("fs");

fs.readFile("Part1.txt", (err, data) => {
  if (err) throw err;

  let x = 0;
  let y = 0;
  const VerifiedAllcoordinate = new Set();
  const datas = data.toString().split("");

  VerifiedAllcoordinate.add(`${x},${y}`);
  datas.forEach((value) => {
    x += value === ">" ? 1 : value === "<" ? -1 : 0;
    y += value === "^" ? 1 : value === "v" ? -1 : 0;
    VerifiedAllcoordinate.add(`${x},${y}`);
  });
  console.log(VerifiedAllcoordinate.size);
});
