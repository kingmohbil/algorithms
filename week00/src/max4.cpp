#include <iostream>

using namespace std;

template<class T>
T max(T number1, T number2, T number3, T number4);

int main() {

    // the input values for the max function
    double number1, number2, number3, number4;

    cout << "Enter four numbers separated by spaces " << endl;
    cin >> number1 >> number2 >> number3 >> number4;
    cout << "The maximum value is " << max(number1, number2, number3, number4) << endl;

    return 0;
}

template<class T>
T max(T number1, T number2, T number3, T number4) {
    T max = number1;
    if(number2 > max) max = number2;
    if(number3 > max) max = number3;
    if(number4 > max) max = number4;
    return max;
}
