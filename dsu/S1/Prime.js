number = 23;

isPrime = true;

for (i = 2; i <= parseInt(number / 2); i++) {
  if (number % i == 0) isPrime = false;
}

if (isPrime) 
     console.log(number + " is Prime");
else 
     console.log(number + " is not Prime");

