let textInput = document.getElementById("text-input");
let checkBtn = document.getElementById("check-btn");
let result = document.getElementById("result");

checkBtn.addEventListener("click", palindrome);

function palindrome() {
    if (textInput.value == "") {
        alert("Please input a value");
    }

    const processedStr = textInput.value.replace(/[\W_]/g, '').toLowerCase();
    let isPalindrome = true;

    for (let i = 0; i < Math.floor(processedStr.length / 2); i++) {
        if (processedStr[i] !== processedStr[processedStr.length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }

    if (isPalindrome) {
        result.innerHTML = textInput.value + " is a palindrome";
    } else {
        result.innerHTML = textInput.value + " is not a palindrome";
    }
}