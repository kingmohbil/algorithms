def max3(number1, number2, number3):
    max = number1
    if number2 > max:
        max = number2
    if (number3 > max):
        max = number3
    return max


# getting the inputs for the max3 algorithm
number1 = float(input('Enter a number: '))
number2 = float(input('Enter a number: '))
number3 = float(input('Enter a number: '))

# giving the results of the max3 algorithm
print(f"The maximum number is: {max3(number1, number2, number3)}")
