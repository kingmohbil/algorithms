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
// a function to calculate the division of two numbers
function division(number1, number2) {
    return number1 / number2;
}
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const number1 = yield readLineNumberAsync('Enter the first number: ');
        const number2 = yield readLineNumberAsync('Enter the second number: ');
        console.log(`The division of ${number1} / ${number2} is: ${division(number1, number2)}`);
        readline.close();
    });
}
run();
