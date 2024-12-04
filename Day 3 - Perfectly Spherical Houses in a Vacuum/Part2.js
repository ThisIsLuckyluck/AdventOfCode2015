const fs = require("fs");

fs.readFile("Part1.txt", (err, data) => {
  if (err) throw err;

  let x = 0;
  let y = 0;

  let x_Santa = 0;
  let y_Santa = 0;

  let x_Robot = 0;
  let y_Robot = 0;

  const VerifiedAllcoordinate = new Set();
  VerifiedAllcoordinate.add(`${x},${y}`);
  const datas = data.toString();
  // console.log(datas);

  const splitData = [];
  for (let i = 0; i < datas.length; i += 2) {
    splitData.push(datas.substring(i, i + 2));
  }

  splitData.forEach((value) => {
    x_Santa += value[0] === ">" ? 1 : value[0] === "<" ? -1 : 0;
    x_Robot += value[1] === ">" ? 1 : value[1] === "<" ? -1 : 0;
    y_Santa += value[0] === "^" ? 1 : value[0] === "v" ? -1 : 0;
    y_Robot += value[1] === "^" ? 1 : value[1] === "v" ? -1 : 0;

    VerifiedAllcoordinate.add(`${x_Santa},${y_Santa}`);
    VerifiedAllcoordinate.add(`${x_Robot},${y_Robot}`);
  });
  console.log(VerifiedAllcoordinate.size);
});
