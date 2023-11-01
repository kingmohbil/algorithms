#include <iostream>

using namespace std;

double division(int number1, int number2);

int main() {

    // the input values for the division algorithm
    int number1, number2;

    cout << "Enter two numbers separated by spaces to be divided " << endl;
    cin >> number1 >> number2;
    cout << "The division " << number1 << " / " << number2 << " is: " << division(number1, number2) << endl;

    return 0;
}


double division(int number1, int number2) {
    return number1 / number2;
}


