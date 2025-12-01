const display = document.querySelector(".user-input");
const buttons = document.querySelectorAll("button");

let currentInput = "";

function updateDisplay() {
  display.innerText = currentInput || "0";
}


function handleInput(value) {

  
  if (value === "AC") {
    currentInput = "";
    updateDisplay();
    return;
  }

  
  if (value === "C") {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
    return;
  }

  
  if (value === "=") {
    try {
      currentInput = eval(currentInput).toString();
    } catch {
      currentInput = "Error";
      setTimeout(() => {
        currentInput = "";
        updateDisplay();
      }, 1000);
    }
    updateDisplay();
    return;
  }

  
   if ("+-*/%".includes(value)) {
    if (currentInput === "" || "+-*/%".includes(currentInput.slice(-1))) {
      return;
    }
  }


  currentInput += value;
  updateDisplay();
}


buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    handleInput(btn.innerText);
  });
});


document.addEventListener("keydown", (e) => {
  const key = e.key;

 
  if (/^[0-9+\-*/%.]$/.test(key)) {
    handleInput(key);
  }


  if (key === "Enter") {
    handleInput("=");
  }

 
  if (key === "Backspace") {
    handleInput("C");
  }

 
  if (key === "Escape") {
    handleInput("AC");
  }
});
