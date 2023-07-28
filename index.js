// Your code here
const dodger = document.getElementById("dodger");

//moving dodger-left

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  console.log(moveDodgerLeft);

//moving dodger-right


function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left= parseInt(leftNumbers, 10);

    if (left < 400) {
        dodger.style.left = `${left + 1}px`;
    }
}

console.log(moveDodgerRight);

//Wire to event listener
dodger.style.bottom = "10px";

//movingDogerLeft
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });
  
//movingDogerRight
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
 