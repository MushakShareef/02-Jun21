

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


///for Flower falling

window.addEventListener("DOMContentLoaded", function () {
    // Existing code for name and wish logic here...

    // Falling flowers effect
    const flowerContainer = document.createElement("div");
    flowerContainer.id = "flower-container";
    document.body.appendChild(flowerContainer);

    function createFlower() {
        const flower = document.createElement("div");
        flower.classList.add("flower");
        flower.textContent = "🌸"; // You can change to 🌼 🌺 etc.

        flower.style.left = Math.random() * 100 + "vw";
        flower.style.animationDuration = (3 + Math.random() * 2) + "s";
        flower.style.fontSize = (20 + Math.random() * 10) + "px";

        flowerContainer.appendChild(flower);

        setTimeout(() => {
            flower.remove();
        }, 5000);
    }

    setInterval(createFlower, 500);
});


/// for Music added
window.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("bg-music");

    if (audio) {
        audio.volume = 0;
        audio.muted = false; // required to enable unmuting after autoplay
        audio.play().then(() => {
            // Gradually increase volume
            let vol = 0;
            const fadeIn = setInterval(() => {
                if (vol < 1) {
                    vol += 0.05;
                    audio.volume = Math.min(vol, 1);
                } else {
                    clearInterval(fadeIn);
                }
            }, 200);
        }).catch((err) => {
            console.warn("Autoplay blocked:", err);
        });
    }
});


//// for downloading it
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("downloadBtn");

    if (btn) {
        btn.addEventListener("click", function () {
            // Select the div you want to capture (wishOutput or any other container)
            const wishSection = document.querySelector(".wishOutput");

            if (wishSection) {
                // Use html2canvas to capture the div as an image
                html2canvas(wishSection, {
                    backgroundColor: "#001122",  // Adjust background if needed
                    scale: 2,                    // Optional, for higher quality image
                    useCORS: true                // Allow CORS if any external images
                }).then(canvas => {
                    const link = document.createElement("a");
                    link.download = "My_Blessing.png";  // Name of the downloaded file
                    link.href = canvas.toDataURL("image/png");  // Convert canvas to image data URL
                    link.click();  // Trigger the download
                });
            }
        });
    }
});
