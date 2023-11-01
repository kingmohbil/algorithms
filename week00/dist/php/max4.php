<?php
function max($number1, $number2, $number3, $number4) {
    $max = $number1;
    if($number2 > $max) $max = $number2;
    if($number3 > $max) $max = $number3;
    if($number4 > $max) $max = $number4;
    
    return $max;
}

// getting the values for the max4 algorithm
$number1 = (float) readline("Enter the first number: ");
$number2 = (float) readline("Enter the second number: ");
$number3 = (float) readline("Enter the third number: ");
$number4 = (float) readline("Enter the fourth number: ");

// giving the values for the max4 algorithm
echo 'The maximum number is: ' . max($number1, $number2, $number3, $number4);
