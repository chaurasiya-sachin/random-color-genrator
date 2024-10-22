// console.log("hello")

function randomColorDivGenrator(){
    
    let colorContainer = document.querySelector(".color-container");
    let colorBox = document.querySelector(".color-box");
    let colorBoxSpan = document.querySelector(".color-box span");
    let button = document.querySelector(".heading button");

    // changing innerHTML of button tag
    colorContainer.innerHTML="";
    colorBox.style.background = "#ffffff";
    button.innerHTML = 'Refresh <i class="ri-restart-line">';

    // changing the innerText of color-box
    colorBox.textContent = "Now Click on the Color box to see Here !!"

    // global varibale to hold colocode
    let copiedColor = ""

    for(let i=1;i<=30;i++){
        let div = document.createElement("div");
        div.classList.add("color-div");
        let colorCode=genrateColorCode()
        div.style.background = colorCode;
        let childDiv = document.createElement("div");
        childDiv.textContent=colorCode;
        childDiv.classList.add("glass-effect");
        div.appendChild(childDiv)
        // Adding event listener to pasting background color on the colorBox
        div.addEventListener('click',function(){
            colorBox.style.background = colorCode;
            colorBox.textContent = `Click here to Copy " ${colorCode} "`;
            colorBox.style.color = "#ffffff";
            colorBoxSpan.classList.add("glass-effect");
            colorBox.classList.add("hover")
            copiedColor=colorCode;
            
        })

        
        // appending color-div to the color-container class
        colorContainer.appendChild(div);
        
    };

    // Add click event listener to copy background color
    colorBox.addEventListener('click', function() {
        navigator.clipboard.writeText(copiedColor).then(() => {
            alert("Copied Color !!");
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    });

}
// genrate color code
function genrateColorCode(){
    let colorString = "0123456789abcdef";
    let colorCodeLength = 6;
    let colorCode = "#";
    for(let i=1;i<=colorCodeLength;i++){
     let idx = Math.floor(Math.random()*colorString.length);
     colorCode += colorString.substring(idx,idx+1);
     
    }
    return colorCode;
}

console.log(genrateColorCode());

    
