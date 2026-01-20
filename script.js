const billInput = document.getElementById("billAmount");
const tipSelect = document.getElementById("tipPercentage");
const peopleInput = document.getElementById("peopleCount");
const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");

function calculateTipPercentage(bill) {
  if (bill <= 100) return 10;
  else if (bill <= 200) return 15;
  else if (bill <= 500) return 20;
  else if (bill <= 1000) return 25;
  else return 30;
}

calculateBtn.onclick = function () {
  const bill = Number(billInput.value);
  const people = Number(peopleInput.value);

  if (billInput.value === "" || peopleInput.value === "") {
    alert("Kindly complete the form before calculating");
    return;
  }

  if (bill <= 0 || people <= 0) {
    alert("Enter positive numbers only");
    return;
  }

  const tip = calculateTipPercentage(bill);


  tipSelect.innerHTML = `<option value="${tip}">${tip}%</option>`;

  const tipPerPerson = (bill * tip) / 100 / people;
  const totalPerPerson = bill / people + tipPerPerson;

  const tipValue = tipPerPerson.toFixed(2);
  const totalValue = totalPerPerson.toFixed(2);

  alert(
    " Result:\n" +
    "Bill Amount: ₹" + bill + "\n" +
    "Tip Percentage: " + tip + "%\n" +
    "Tip Per Person: ₹" + tipValue + "\n" +
    "Total Per Person: ₹" + totalValue
  );
};

resetBtn.onclick = function () {
  billInput.value = "";
  peopleInput.value = "";

  tipSelect.innerHTML = `<option value="">Auto Calculated</option>`;
};
