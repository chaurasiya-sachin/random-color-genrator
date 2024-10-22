let copiedColor = "";

// Define the event listener function separately
function copyColor() {
    navigator.clipboard.writeText(copiedColor).then(() => {
        alert("Copied Color: " + copiedColor);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

function randomColorDivGenrator() {
    let colorContainer = document.querySelector(".color-container");
    let colorBox = document.querySelector(".color-box");
    let colorBoxSpan = document.querySelector(".color-box span");
    let button = document.querySelector(".heading button");

    // Reset color container and color box
    colorContainer.innerHTML = "";
    colorBox.style.background = "#ffffff";
    colorBox.style.color = "#000000";
    button.innerHTML = 'Refresh <i class="ri-restart-line">';
    colorBox.textContent = "Now Click on the Color box to see Here !!";

    // Remove the previous event listener to avoid stacking multiple listeners
    colorBox.removeEventListener('click', copyColor);

    for (let i = 1; i <= 30; i++) {
        let div = document.createElement("div");
        div.classList.add("color-div");
        let colorCode = genrateColorCode();
        div.style.background = colorCode;

        let childDiv = document.createElement("div");
        childDiv.textContent = colorCode;
        childDiv.classList.add("glass-effect");
        div.appendChild(childDiv);

        // Set up event listener to change colorBox background and set copiedColor
        div.addEventListener('click', function () {
            colorBox.style.background = colorCode;
            colorBox.textContent = `Click here to Copy "${colorCode}"`;
            colorBox.style.color = "#ffffff";
            colorBoxSpan.classList.add("glass-effect");
            colorBox.classList.add("hover");
            copiedColor = colorCode;  // Store the color to be copied
        });

        // Append the generated div
        colorContainer.appendChild(div);
    }

    // Add the click event listener again
    colorBox.addEventListener('click', copyColor);
}

// Generate random color code
function genrateColorCode() {
    let colorString = "0123456789abcdef";
    let colorCodeLength = 6;
    let colorCode = "#";
    for (let i = 1; i <= colorCodeLength; i++) {
        let idx = Math.floor(Math.random() * colorString.length);
        colorCode += colorString.substring(idx, idx + 1);
    }
    return colorCode;
}
