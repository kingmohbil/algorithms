<?php
function division($number1, $number2) {    
    return $number1 / $number2;
}

// getting the values for the division algorithm
$number1 = (int) readline("Enter the first number: ");
$number2 = (int) readline("Enter the second number: ");

// giving the values for the sum3 algorithm
echo 'The division of ' . $number1 . ' / ' . $number2 .  ' is: ' . division($number1, $number2);
