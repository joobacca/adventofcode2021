const fs = require('fs');
const path = require('path');

fs.readFile(path.resolve(__dirname, './input.txt'), 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const dataArray = data.split('\n');
  const newArray = [];

  let counter = 0;
  dataArray.forEach((el, i) => {
    if (i < dataArray.length - 2) {
      newArray.push(parseInt(dataArray[i]) + parseInt(dataArray[i + 1]) + parseInt(dataArray[i + 2]));
    }
  });

  newArray.forEach((el, i) => {
    if (i > 0) {
      if (parseInt(el) > parseInt(newArray[i - 1])) counter++;
    }
  })
  console.log(counter);
});
