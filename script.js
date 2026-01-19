const  billInput = document.getElementById("billAmount");
const tipSelect = document.getElementById("tipPercentage");
const peopleInput = document.getElementById("peopleCount");
const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const tipText = document.getElementById("tipPerPerson");
const totalText = document.getElementById("totalPerPerson");


calculateBtn.onclick = function () {


const bill = Number(billInput.value);
const tip = Number(tipSelect.value);
const people = Number(peopleInput.value);



if (billInput.value == "" || tipSelect.value == "" || peopleInput.value == "") {
alert("Please fill all fields");
return;
}



if (bill <= 0 || tip <= 0 || people <= 0) {
alert("Values must be greater than 0");
return;
}




const tipPerPerson = (bill * tip / 100) / people;



const totalPerPerson = (bill / people) + tipPerPerson;


tipText.innerHTML = tipPerPerson.toFixed(2);
totalText.innerHTML = totalPerPerson.toFixed(2);
};



resetBtn.onclick = function () {
billInput.value = "";
tipSelect.value = "";
peopleInput.value = "";
tipText.innerHTML = "0.00";
totalText.innerHTML = "0.00";
};