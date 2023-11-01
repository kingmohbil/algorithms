<?php
function sumAndProduct($number1, $number2) {    
    echo "The sum is: " . $number1 + $number2;
    echo "The product is: " . $number1 * $number2;
}

// getting the values for the sum and product algorithm
$number1 = (int) readline("Enter the first number: ");
$number2 = (int) readline("Enter the second number: ");

// giving the values for the sum and product algorithm
sumAndProduct($number1, $number2);
