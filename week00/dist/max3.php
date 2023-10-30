<?php
function max3($number1, $number2, $number3) {
    $max = $number1;
    if($number2 > $max) $max = $number2;
    if($number3 > $max) $max = $number3;
    
    return $max;
}

// getting the values for the max3 algorithm
$number1 = (float) readline("Enter a number: ");
$number2 = (float) readline("Enter a number: ");
$number3 = (float) readline("Enter a number: ");

// giving the values for the max3 algorithm
echo 'The maximum number is: ' . max($number1, $number2, $number3);
