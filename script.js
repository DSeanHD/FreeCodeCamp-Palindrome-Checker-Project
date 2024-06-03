let textInput = document.getElementById("text-input");
let checkBtn = document.getElementById("check-btn");
let result = document.getElementById("result");

let checkPalindrome = () => {
  const regex = /[\W_]/gi;
  let userInput = textInput.value.replace(regex, "").toLowerCase();
  let userInputReverse = userInput.split("").reverse().join("").toLowerCase();

  if (userInput === "") {
    alert("Please input a value");
    return null;
  }

  if (userInput === userInputReverse) {
    result.innerHTML = `<b>${textInput.value}</b> is a palindrome`;
  } else {
    result.innerHTML = `<b>${textInput.value}</b> is not a palindrome`;
  }
  
  // For debugging purposes
  console.log(userInput);
  console.log(userInputReverse);
}

checkBtn.addEventListener("click", checkPalindrome);
textInput.addEventListener("keyup", e => e.key == "Enter" ? checkPalindrome() : null);
