#include <iostream>

using namespace std;

void sumAndAverage(int number1, int number2, int number3);

int main() {

    // the input values for the sum function
    double number1, number2, number3;

    cout << "Enter three numbers separated by spaces " << endl;
    cin >> number1 >> number2 >> number3;
    sumAndAverage(number1, number2, number3);

    return 0;
}


void sumAndAverage(int number1, int number2, int number3) {
    cout << "The sum is: " << number1 + number2 + number3 << endl;
    cout << "The average is: " << (number1 + number2 + number3) / 3 << endl;
}


