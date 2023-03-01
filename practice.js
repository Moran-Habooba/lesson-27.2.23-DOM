let $userName = document.querySelector("input#name");
let $userEmail = document.querySelector("input#email");
let $userAge = document.querySelector("input#age");

console.log($userName, $userEmail, $userAge);
let $sendButton = document.querySelector("button#send-btn");
let $userInfo = document.querySelector("#userInfo");

$sendButton.addEventListener("click", sumbit);

function sumbit() {
  $userInfo.innerHTML = `${$userName.value} (${$userAge.value}) ${$userEmail.value}`;
  console.log(userInfo);
}
//3
//changebackround
let a = document.getElementById("a");
document
  .getElementById("change-background-btn")
  .addEventListener("click", show);
function show() {
  console.log(a);
  a.classList.add("background");
  a.style.backgroundColor = "pink";
}
document
  .getElementById("remove-background-btn")
  .addEventListener("click", remove1);
function remove1() {
  a.classList.remove("background");
  a.style.backgroundColor = "";
}
//add border
// let a = document.getElementById("a");
document
  .getElementById("change-border-btn")
  .addEventListener("click", addBorder);
function addBorder() {
  console.log(a);
  a.classList.add("border");
  a.style.border = "5px solid purple ";
}
document.getElementById("remove-border-btn").addEventListener("click", remove);
function remove() {
  a.classList.remove("border");
  a.style.border = "";
}
//change the text

fruits = ["apple", "banana", "orange", "grapes", "watermelon"];
colors = [
  "green",
  "yellow",
  " pink",
  "blue",
  "orange",
  "DarkSlateBlue ",
  "GreenYellow",
];
document
  .getElementById("change-the-text-randomly")
  .addEventListener("click", text);
function text() {
  let randomIndex = Math.floor(Math.random() * fruits.length);
  let randomFruit = fruits[randomIndex];

  let randomC = Math.floor(Math.random() * colors.length);
  let randomColors = colors[randomC];
  document.getElementById("a").style.fontSize = "xx-large";
  a.textContent = randomFruit;
  a.style.color = randomColors;

  if (a.classList.contains("fruit")) {
    a.classList.remove("fruit");
  } else {
    a.classList.add("fruit");
  }
}

// ---------------------------------------
// 1. create a new project
// 2. ask the user for name email and age and show as follows (use inputs, divs, addEventListener)
// 	"Daniel (28) - zaodk.@gamil.com"

// 3. create three buttons one will change a divs background one will change the border and one will change the text randomly from the following array
// (use classList)
// ["apple", "banana", "orange", "grapes", "watermelon"]

// 🤚🏾

// BONUS
// 4. create input which the user will tell how many levels and show in div
// 4.1 instead of * use <div></div> with some styling
// בונוס
document.getElementById("draw").addEventListener("click", drawPyramid);

function drawPyramid() {
  document.getElementById("pyramid").innerHTML = "";
  let levels = document.getElementById("levels").value;
  for (let i = 0; i < levels; i++) {
    // ליצור שורה לשלב הנוכחי
    let row = document.createElement("div");
    row.classList.add("pyramid-row");

    // לחשב את מספר הבלוקים שצריך לשלב הזה
    let numBlocks = i * 2 + 1;

    // להוסיף את הבלוקים לשורה
    for (let j = 0; j < numBlocks; j++) {
      let block = document.createElement("div");
      block.classList.add("pyramid-block");
      row.appendChild(block);
    }

    // להוסיף את השורה החדשה לפרמידה
    document.getElementById("pyramid").appendChild(row);
  }
}
