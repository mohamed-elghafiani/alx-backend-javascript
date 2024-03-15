export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const choices = [1, 2, 3];
    if (choices[Math.floor(Math.random() * choices.length)]) {
      resolve('Good Job!');
    } else {
      reject(Error('Error'));
    }
  });
}
