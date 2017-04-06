require('babel-polyfill');

function getData() {
  return new Promise((resolve, reject) => {
    resolve('ok');
  });
}

async function run() {
  try {
    const data = await getData();
    console.log(data);
  } catch (e) {
    console.log('An error occurred: \n', e);
  }
}

run().then(d => console.log('Done!'));
