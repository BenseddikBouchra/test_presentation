const up = document.querySelector("#up");
const down = document.querySelector("#down");
const reset = document.querySelector("#reset");
const counter = document.querySelector("#counter");
let count = 0;
function Increase() {
  count += 1;
  counter.innerHTML = count;
}
function decrease() {
  count -= 1;
  counter.innerHTML = count;
}
function Reset() {
  count = 0;
  counter.innerHTML = 0;
}
up.addEventListener("click", Increase);
down.addEventListener("click", decrease);
reset.addEventListener("click", Reset);
