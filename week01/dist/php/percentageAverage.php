<?php
function percentageAndAverage($number1, $number2, $number3, $maxMark) {    
    echo "The percentage is: " . (($number1 + $number2 + $number3) / $maxMark) * 100 . '%';
}

// getting the values for the percentage and average algorithm
echo "Enter three marks ";

$mark1 = (int) readline("Enter the first mark: ");
$mark2 = (int) readline("Enter the second mark: ");
$mark3 = (int) readline("Enter the third mark: ");

echo "Enter the maximum mark for each mark";

$max1 = (int) readline("Enter the maximum mark for " . $mark1);
$max2 = (int) readline("Enter the maximum mark for " . $mark2);
$max3 = (int) readline("Enter the maximum mark for " . $mark3);

// giving the values for the percentage and average algorithm
percentageAndAverage($mark1, $mark2, $mark3, ($max1 + $max2 + $max3) );
