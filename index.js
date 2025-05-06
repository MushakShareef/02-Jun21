



// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("wishForm");
    const nameInput = document.getElementById("input-HTML");
    const languageSelect = document.getElementById("select-HTML");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // stop default form submission

        const name = nameInput.value.trim();
        const language = languageSelect.value;

        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        if (language !== "Tamil" && language !== "English") {
            alert("Please select a language.");
            return;
        }
      

        // If both are valid, you can proceed
        console.log("Name:", name);
        console.log("Language:", language);
    });
});


document.getElementById("wishForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nameInput = document.getElementById("input-HTML").value.trim();
    const languageSelect = document.getElementById("select-HTML").value;

    if (!nameInput || !languageSelect) {
        alert("Please enter your name and select a language.");
        return;
    }

    // Save the name and random number
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    localStorage.setItem("userName", nameInput);
    localStorage.setItem("wishNumber", randomNumber);

    // Redirect based on language
    if (languageSelect === "Tamil") {
        window.location.href = "varadhanTa.html";
    } else if (languageSelect === "English") {
        window.location.href = "varadhanEn.html";
    }
});
