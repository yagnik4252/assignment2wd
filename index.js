// Reverse a String
function reverseString() {
    const inputString = document.getElementById("reverseInput").value;
    const reversedString = inputString.split('').reverse().join('');
    document.getElementById("reverseOutput").textContent = `Reversed String: ${reversedString}`;
}

// Check Palindrome
function checkPalindrome() {
    const input = document.getElementById("palindromeInput").value.toLowerCase();
    const reversedInput = input.split('').reverse().join('');
    const isPalindrome = input === reversedInput;
    if (isPalindrome) {
        document.getElementById("palindromeOutput").textContent = `${input} is a palindrome!`;
    } else {
        document.getElementById("palindromeOutput").textContent = `${input} is not a palindrome.`;
    }
}

// Tip Calculator
function calculateTotal() {
    const subtotal = parseFloat(document.getElementById("subtotal").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
    if (!isNaN(subtotal) && !isNaN(tipPercentage)) {
        const tipAmount = (subtotal * tipPercentage) / 100;
        const totalAmount = subtotal + tipAmount;
        document.getElementById("tipOutput").textContent = `Total Amount: $${totalAmount.toFixed(2)}`;
    } else {
        document.getElementById("tipOutput").textContent = "Please enter valid numbers.";
    }
}
