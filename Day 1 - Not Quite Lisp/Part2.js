const fs = require("fs");

fs.readFile("instruction.txt", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  const datas = data.toString();
  let etage = 0;
  let nb_char = 0;
  for (let i = 0; i < datas.length; i++) {
    etage += datas[i] === "(" ? 1 : datas[i] === ")" ? -1 : 0;
    nb_char++;
    if (etage === -1) {
      console.log(nb_char);
      return () => {
        nb_char;
      };
    }
  }

  console.log(etage);
});
