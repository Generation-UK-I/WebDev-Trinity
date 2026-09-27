console.log("Bean Haven Coffee website loaded!");

// Variables
let shopName = "Bean Haven Coffee";

// Array
let specials = [
    "Caramel Latte",
    "Vanilla Cappuccino",
    "Hazelnut Mocha",
    "Flat White"
];

// Function
function showSpecial() {

    let randomNumber =
        Math.floor(Math.random() * specials.length);

    let special = specials[randomNumber];

    document.getElementById("specialOutput")
        .textContent =
        "Today's special is: " + special;
}

// Event Listener
document.getElementById("specialButton")
    .addEventListener("click", showSpecial);

// User Input + DOM Manipulation
document.getElementById("signupButton")
    .addEventListener("click", function () {

        let name =
            document.getElementById("name").value;

        if (name === "") {

            document.getElementById("signupMessage")
                .textContent =
                "Please enter your name.";

        } else {

            document.getElementById("signupMessage")
                .textContent =
                "Welcome to the newsletter, " +
                name + "!";

        }
    });

// Loop example
for (let i = 0; i < specials.length; i++) {
    console.log("Drink " + (i + 1) + ": " + specials[i]);
}