function calculateAge() {

    let dobInput = document.getElementById("dob").value;

    if (dobInput === "") {
        document.getElementById("result").innerHTML = "⚠ Please enter Date in DD-MM-YYYY format";
        return;
    }

    // Split input
    let parts = dobInput.split("-");

    if (parts.length !== 3) {
        document.getElementById("result").innerHTML = "⚠ Invalid format! Use DD-MM-YYYY";
        return;
    }

    let day = parseInt(parts[0]);
    let month = parseInt(parts[1]) - 1; // JS months start from 0
    let year = parseInt(parts[2]);

    let birthDate = new Date(year, month, day);
    let today = new Date();

    if (birthDate > today || isNaN(birthDate)) {
        document.getElementById("result").innerHTML = "⚠ Invalid Date Entered!";
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("result").innerHTML =
        "You are " + years + " Years " + months + " Months " + days + " Days old.";
}
