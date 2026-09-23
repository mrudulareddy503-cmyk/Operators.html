function calculate(operator) {
    // Read the two inputs as numbers.
    const x = document.getElementById("firstfield").valueAsNumber;
    const y = document.getElementById("secondfield").valueAsNumber;

    // Find the result area and make it visible.
    const resultDiv = document.getElementById("result");
    resultDiv.style.display = "block";

    // Check that both inputs contain numbers.
    if (Number.isNaN(x) || Number.isNaN(y)) {
        resultDiv.textContent = "Please enter both numbers.";
        return;
    }

    // Store the answer after choosing the operation.
    let answer;

    switch (operator) {
        case "+":
            answer = x + y;
            break;

        case "-":
            answer = x - y;
            break;

        case "*":
            answer = x * y;
            break;

        case "/":
            if (y === 0) {
                resultDiv.textContent = "Cannot divide by zero.";
                return;
            }

            answer = x / y;
            break;

        default:
            resultDiv.textContent = "Please select a valid operation.";
            return;
    }

    // Display the answer on the page.
    resultDiv.textContent = "Result: " + answer;
}
