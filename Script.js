// Question 1: Count Promise hi

let count = 5;

document.getElementById("checkCount").addEventListener("click", () => {
    const countPromise = new Promise((resolve, reject) => {
        if (count > 0) {
            resolve("Positive count");
        } else {
            reject("Negative count");
        }
    });

    countPromise
        .then((message) => {
            document.getElementById("countResult").textContent = message;
        })
        .catch((error) => {
            document.getElementById("countResult").textContent = error;
        });
});


// Question 2: OTP Promise

document.getElementById("submitOtp").addEventListener("click", () => {
    const otp = document.getElementById("otp").value;

    const otpPromise = new Promise((resolve, reject) => {
        if (otp === "1234") {
            resolve("OTP Verified Successfully");
        } else {
            reject("Invalid OTP");
        }
    });

    otpPromise
        .then((message) => {
            document.getElementById("otpResult").textContent = message;
        })
        .catch((error) => {
            document.getElementById("otpResult").textContent = error;
        });
});