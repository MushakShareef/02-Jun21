

window.addEventListener("DOMContentLoaded", function () {
    const name = localStorage.getItem("userName");
    const number = localStorage.getItem("wishNumber");

    if (!name || !number) {
        document.body.innerHTML = "<p>Missing user data. Please go back and fill the form.</p>";
        return;
    }

    // Hide all 100 p tags first
    for (let i = 1; i <= 100; i++) {
        const para = document.querySelector(`.varadhan${i}`);
        if (para) {
            para.style.display = "none";
        }
    }

    // Show the selected one
    const selectedPara = document.querySelector(`.varadhan${number}`);
    if (selectedPara) {
        selectedPara.style.display = "block";
        

        selectedPara.innerHTML = `<strong>${name }</strong>, ${ selectedPara.innerHTML}`;
       

    }
});

