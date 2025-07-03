function generatepassword() {
    let lengthValue = document.getElementById("length").value;
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";
    let password = "";

    if (lengthValue < 1 || lengthValue > 15) {
        alert("Please enter a length between 1 and 15.");
        return;
    }

    if (lengthValue < 0) {
        alert("Please enter a positive number.");
        return; 
    }

    for (let i = 0; i < lengthValue; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    let output = document.querySelector(".output");
    output.textContent = password;
}