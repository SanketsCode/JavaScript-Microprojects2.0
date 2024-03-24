const amount = document.getElementById("amount");
const Interest = document.getElementById("interest");
const years = document.getElementById("years");
const error = document.getElementById("error");
const calculate = document.getElementById("calculate");
const result = document.getElementById("result");

function OnCalculate() {
  error.innerText = "";
  if (amount.value == "") {
    error.innerText = "Amount is Missing";
    return;
  }

  if (!Interest.value) {
    error.innerText = "Interest is invalid";
    return;
  }

  if (!years.value) {
    error.innerText = "Years are Invalid";
    return;
  }

  const principle = parseFloat(amount.value);
  const interestRate = parseFloat(Interest.value);
  const year = parseFloat(years.value);

  const final_result = principle + (principle * interestRate * year) / 100;

  result.innerText = `Your Maturity Amount is ${final_result}`;
}

calculate.addEventListener("click", () => {
  OnCalculate();
});
