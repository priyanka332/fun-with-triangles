const inputs = document.querySelectorAll(".angle-input");
const inTriangleBtn = document.querySelector("#is-triangle-btn");
const outputEl = document.querySelector("#output");


function calculateSumOfAngles(angle1, angle2, angle3) {
    const sumOfAngles = angle1 + angle2 + angle3;
    // console.log(sumOfAngles);
    return sumOfAngles;
}

function isTriangle() {
    const sumOfAngles = calculateSumOfAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value));
    if (sumOfAngles === 180) {
        outputEl.innerText = "Yay, The angle from a triangle";
    }
    else {
        outputEl.innerText = "Oh Oh! The angle don't from a triangle";
    }
}

inTriangleBtn.addEventListener("click",isTriangle)