const getInputFile = require('../helpers/getInputFile');

(async function () {
  const data = await getInputFile();
  const dataArray = data.split('\n');

  const emptyCounterArray = dataArray[0].split('').reduce((prev, curr) => {
    if (curr === '\r') return prev;
    return [...prev, { '0': 0, '1': 0 }];
  }, []);

  const scannedData = dataArray.reduce((prev, curr, i) => {
    curr.split('').forEach((char, idx) => {
      if (char !== '\r' && typeof prev !== 'undefined') prev[+idx][char]++;
    });
    return prev;
  }, emptyCounterArray);

  const [gamma, epsilon] = scannedData.reduce((prev, curr) => {
    return curr['0'] > curr['1']
      ? [prev[0] + '0', prev[1] + '1']
      : [prev[0] + '1', prev[1] + '0'];
  }, ['', '']);

  const powerConsumption = parseInt(gamma, 2) * parseInt(epsilon, 2);
  console.log(gamma, epsilon, powerConsumption);
})();