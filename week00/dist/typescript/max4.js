"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = require("readline");
// initializing the input, output interface
const readline = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout,
});
// reading a line form the cli and converting it to a number
const readLineNumberAsync = (msg) => {
    return new Promise((resolve) => {
        readline.question(msg, (userRes) => {
            resolve(Number(userRes));
        });
    });
};
// a function to calculate the max number between four numbers
function max(number1, number2, number3, number4) {
    let max = number1;
    if (number2 > max)
        max = number2;
    if (number3 > max)
        max = number3;
    if (number4 > max)
        max = number4;
    return max;
}
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const message = 'Enter a number: ';
        const number1 = yield readLineNumberAsync(message);
        const number2 = yield readLineNumberAsync(message);
        const number3 = yield readLineNumberAsync(message);
        const number4 = yield readLineNumberAsync(message);
        console.log('The largest number is: ' + max(number1, number2, number3, number4));
        readline.close();
    });
}
run();
