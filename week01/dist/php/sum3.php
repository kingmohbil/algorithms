<?php
function sum($number1, $number2, $number3) {
    $max = $number1;
    if($number2 > $max) $max = $number2;
    if($number3 > $max) $max = $number3;
    
    return $max;
}

// getting the values for the sum3 algorithm
$number1 = (float) readline("Enter the first number: ");
$number2 = (float) readline("Enter the second number: ");
$number3 = (float) readline("Enter the third number: ");

// giving the values for the sum3 algorithm
echo 'The sum of the numbers is: ' . sum($number1, $number2, $number3);
