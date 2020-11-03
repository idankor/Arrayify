let myButton = document.getElementById("my-button");
let myInput = document.getElementById("my-input");
let myResults = document.getElementById("my-results");
let colorsArray = [
  "#80ffdb",
  "#72efdd",
  "#64dfdf",
  "#56cfe1",
  "#48bfe3",
  "#4ea8de",
  "#5390d9",
  "#5e60ce",
  "6930c3",
  "#7400b8",
];

console.log(myButton);

myInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    document.getElementById("my-button").click();
  }
});

myButton.addEventListener("click", (event) => {
  let tempString = myInput.value;
  console.log(tempString);
  for (i = 0; i < tempString.length; i++) {
    let mySwitch = 0;
    let myChecker = (Math.floor(i / 10));
    if ((myChecker % 2) != 0) {
        mySwitch = 1;
    }
    console.log(mySwitch + ' <----> ' + tempString[i]);
    let myBox = document.createElement("div");
    let tempChar = tempString[i];
    myBox.innerHTML = tempChar;
    myBox.className = "my-box";
    if (mySwitch == 0) {
        myBox.style.backgroundColor = colorsArray[i % 10];
    }
    if (mySwitch == 1) {
        myBox.style.backgroundColor = colorsArray[(9 - (i % 10))];
    }
    myResults.appendChild(myBox);
  }
});
