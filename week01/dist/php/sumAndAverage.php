<?php
function sumAndAverage($number1, $number2, $number3) {    
    echo "The sum is: " . $number1 + $number2 + $number3;
    echo "The average is: " . ($number1 + $number2 + $number3) / 3;
}

// getting the values for the sum and average algorithm
$number1 = (int) readline("Enter the first number: ");
$number2 = (int) readline("Enter the second number: ");
$number3 = (int) readline("Enter the third number: ");

// giving the values for the sum and average algorithm
sumAndAverage($number1, $number2, $number3);
