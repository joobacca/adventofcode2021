const getInputFile = require('../helpers/getInputFile');

(async function () {
  const data = await getInputFile();
  const directionArray = data.split('\n');

  let horizontal = 0;
  let depth = 0;

  directionArray.forEach(el => {
    const [dir, amount] = el.split(' ');
    switch(dir) {
      case 'up':
        depth -= parseInt(amount, 10);
        break;
      case 'down': 
        depth += parseInt(amount, 10);
        break;
      case 'forward':
        horizontal += parseInt(amount, 10);
        break;
    }
  });

  console.log(horizontal * depth);
})();