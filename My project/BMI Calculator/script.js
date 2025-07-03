function calculateBMI() {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let result = document.getElementById("result");

  if (weight < 0 || height < 0) {
    result.innerHTML = "Weight and height must be positive numbers.";
    return;
  }

  if (weight === "" || height === "") {
    result.innerHTML = "Please enter both weight and height.";
    return;
  }
  
  let bmi = weight / height ** 2;
  bmi = bmi.toFixed(2); // Round to two decimal places
  result.innerHTML = `Your BMI is ${bmi}.`;

  if (bmi < 18.5) {
    result.innerHTML += " You are underweight.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    result.innerHTML += " You have a normal weight.";
  } else if (bmi >= 25 && bmi <= 29.9) {
    result.innerHTML += " You are overweight.";
  } else {
    result.innerHTML += " You are obese.";
  }
}
