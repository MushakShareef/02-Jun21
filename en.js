

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
    const downloadButton = document.getElementById('downloadBtn');

    downloadButton.addEventListener('click', function () {
        // Check if .ovrall is rendered and contains the content we want to capture
        const targetElement = document.querySelector(".ovrall");
        
        if (!targetElement) {
            console.error("Element .ovrall not found!");
            return;
        }

        console.log("Capturing the .ovrall content...");

        html2canvas(targetElement).then(function(canvas) {
            console.log("Canvas generated:", canvas); // Log the canvas to the console for debugging

            // If canvas width or height is zero, the content may not be captured correctly
            if (canvas.width === 0 || canvas.height === 0) {
                console.error("Canvas has zero width or height, capture failed.");
                return;
            }

            // Create a download link
            var link = document.createElement("a");
            link.href = canvas.toDataURL("image/png"); // Convert the canvas to a PNG data URL
            link.download = "blessing_image.png"; // Set the download file name
            link.click(); // Trigger the download
        }).catch(function(error) {
            console.error("Error during html2canvas execution:", error);
        });
    });
});

