x = "malayalamx";

isPalindrome = true;
for (i = 0; i < parseInt(x.length / 2); i++) {
  if (x[i] !== x[x.length - 1 - i]) {
    isPalindrome = false;
  }
}

if (isPalindrome) 
     console.log(x + " is a palindrome");
else 
     console.log(x + " is not a palindrome");


