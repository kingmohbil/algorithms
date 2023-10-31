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

// a function to calculate the max number between four numbers
function max(
  number1: number,
  number2: number,
  number3: number,
  number4: number
): number {
  let max = number1;

  if (number2 > max) max = number2;
  if (number3 > max) max = number3;
  if (number4 > max) max = number4;

  return max;
}

async function run() {
  const message = 'Enter a number: ';
  const number1 = await readLineNumberAsync(message);
  const number2 = await readLineNumberAsync(message);
  const number3 = await readLineNumberAsync(message);
  const number4 = await readLineNumberAsync(message);

  console.log(
    'The largest number is: ' + max(number1, number2, number3, number4)
  );
  readline.close();
}

run();
