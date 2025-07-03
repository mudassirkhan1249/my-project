
function res() {
    let bill = document.getElementById("billAmount").value;
    let tipPercentage = document.getElementById("tipPercentage").value;
    let calBtn = document.getElementById("calculateTip");
    let result = document.getElementById("result");

    if (bill === "" || tipPercentage === "") {
        result.innerHTML = "Please enter both bill amount and tip percentage.";
        return;
    }   

    if (bill < 0 || tipPercentage < 0) {
        result.innerHTML = "Bill amount and tip percentage must be non-negative.";
        return;
    }
    
    bill = parseFloat(bill);
    tipPercentage = parseFloat(tipPercentage);
    let tipAmount = (bill * tipPercentage) / 100;
    let totalAmount = bill + tipAmount;
    result.innerHTML = `Tip Amount: $${tipAmount.toFixed(2)}<br>Total Amount: $${totalAmount.toFixed(2)}`;
}