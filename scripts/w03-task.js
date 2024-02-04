/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

window.onload = () => {
  function add(number1, number2) {
    return number1 + number2;
  }

  function addNumber() {
    const input1 = Number(document.getElementById("add1").value);
    const input2 = Number(document.getElementById("add2").value);

    const result = add(input1, input2);

    document.getElementById("sum").value = result.toString();
  }

  const addNumberElement = document.getElementById("addNumbers");

  function handleClick() {
    addNumber();
  }

  addNumberElement.addEventListener("click", handleClick);

  /* Function Expression - Subtract Numbers */

  const subtract = (number1, number2) => number1 - number2;

  const subtractNumber = () => {
    const input1 = Number(document.getElementById("subtract1").value);
    const input2 = Number(document.getElementById("subtract2").value);

    const result = subtract(input1, input2);

    document.getElementById("difference").value = result.toString();
  };

  const subtractNumberElement = document.getElementById("subtractNumbers");

  const handleSubtractClick = () => {
    subtractNumber();
  };

  subtractNumberElement.addEventListener("click", handleSubtractClick);

  /* Arrow Function - Multiply Numbers */

  const multiply = (number1, number2) => number1 * number2;

  const multiplyNumbers = () => {
    const input1 = Number(document.getElementById("factor1").value);
    const input2 = Number(document.getElementById("factor2").value);

    const result = multiply(input1, input2);

    document.getElementById("product").value = result.toString();
  };

  const multiplyNumberElement = document.getElementById("multiplyNumbers");

  const handleMultiplyClick = () => {
    multiplyNumbers();
  };

  multiplyNumberElement.addEventListener("click", handleMultiplyClick);

  /* Open Function Use - Divide Numbers */

  const divide = (number1, number2) => number1 / number2;

  const divideNumbers = () => {
    const input1 = Number(document.getElementById("dividend").value);
    const input2 = Number(document.getElementById("divisor").value);

    const result = divide(input1, input2);

    document.getElementById("quotient").value = result.toString();
  };

  const divideNumberElement = document.getElementById("divideNumbers");

  const handleDevideClick = () => {
    divideNumbers();
  };

  divideNumberElement.addEventListener("click", handleDevideClick);

  /* Decision Structure */

  const computeSubTotal = () => {
    isMember = document.getElementById("member").checked;
    let subtotal = Number(document.getElementById("subtotal").value);

    if (isMember) {
      subtotal *= 0.8;
    }

    document.getElementById("total").innerHTML = `$ ${subtotal.toFixed(2)}`;
  };

  const handleGetTotalDueClick = () => {
    computeSubTotal();
  };

  document
    .getElementById("getTotal")
    .addEventListener("click", handleGetTotalDueClick);

  /* ARRAY METHODS - Functional Programming */
  /* Output Source Array */

  const numbersArray = Array.from({ length: 13 }, (_, index) => index + 1);

  document.getElementById("array").innerHTML = `[${numbersArray}]`;

  /* Output Odds Only Array */

  document.getElementById("odds").innerHTML = `[${numbersArray.filter(
    (number) => number % 2 > 0
  )}]`;

  /* Output Evens Only Array */

  document.getElementById("evens").innerHTML = `[${numbersArray.filter(
    (number) => number % 2 === 0
  )}]`;

  /* Output Sum of Org. Array */

  document.getElementById("sumOfArray").innerHTML = `[${numbersArray.reduce(
    (sum, number) => sum + number,
    0
  )}]`;

  /* Output Multiplied by 2 Array */

  document.getElementById("multiplied").innerHTML = `[${numbersArray.map(
    (number) => number * 2
  )}]`;

  /* Output Sum of Multiplied by 2 Array */

  document.getElementById("sumOfMultiplied").innerHTML = `[${numbersArray
    .map((number) => number * 2)
    .reduce((sum, number) => sum + number, 0)}]`;
};
