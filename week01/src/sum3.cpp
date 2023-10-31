#include <iostream>

using namespace std;

int sum(int number1, int number2, int number3);

int main() {

    // the input values for the sum function
    double number1, number2, number3;

    cout << "Enter three numbers separated by spaces " << endl;
    cin >> number1 >> number2 >> number3;
    cout << "The sum between the numbers is: " << sum(number1, number2, number3) << endl;

    return 0;
}


int sum(int number1, int number2, int number3) {
    return number1 + number2 + number3;
}


