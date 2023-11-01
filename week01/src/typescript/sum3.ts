import { createInterface } from 'readline';

// initializing the input, output interface
const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

// reading a line form the cli and converting it to a number
const readLineNumberAsync: (msg: string) => Promise<number> = (msg: string) => {
  return new Promise((resolve) => {
    readline.question(msg, (userRes: string) => {
      resolve(Number(userRes));
    });
  });
};

// a function to calculate the sum of three numbers
function sum(number1: number, number2: number, number3: number): number {
  return number1 + number2 + number3;
}

async function run() {
  const number1 = await readLineNumberAsync('Enter the first number: ');
  const number2 = await readLineNumberAsync('Enter the second number: ');
  const number3 = await readLineNumberAsync('Enter the third number: ');

  console.log('The sum is: ' + sum(number1, number2, number3));
  readline.close();
}

run();
