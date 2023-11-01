#include <iostream>

using namespace std;

void sumAndProduct(int number1, int number2);

int main() {

    // the input values for the sum and product algorithm
    int number1, number2;

    cout << "Enter two numbers separated by spaces" << endl;
    cin >> number1 >> number2;
    sumAndProduct(number1, number2);

    return 0;
}


void sumAndProduct(int number1, int number2) {
    cout << "The Sum is: " << number1 + number2 << endl;
    cout << "The Product is: " << number1 * number2 << endl;
}

