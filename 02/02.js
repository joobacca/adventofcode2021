const getInputFile = require('../helpers/getInputFile');

(async function () {
  const data = await getInputFile();
  const directionArray = data.split('\n');

  let horizontal = 0;
  let depth = 0;
  let aim = 0;

  directionArray.forEach(el => {
    const [dir, amount] = el.split(' ');
    switch(dir) {
      case 'up':
        aim -= parseInt(amount, 10);
        break;
      case 'down': 
        aim += parseInt(amount, 10);
        break;
      case 'forward':
        horizontal += parseInt(amount, 10);
        depth += aim * parseInt(amount, 10);
        break;
    }
  });

  console.log(horizontal * depth);
})();