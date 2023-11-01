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

// a function to calculate the sum and product of two numbers
function sumAndProduct(number1: number, number2: number): void {
  console.log(`The sum is: ${number1 + number2}`);
  console.log(`The product is: ${number1 * number2}`);
}

async function run() {
  const number1 = await readLineNumberAsync('Enter the first number: ');
  const number2 = await readLineNumberAsync('Enter the second number: ');
  sumAndProduct(number1, number2);
  readline.close();
}

run();
