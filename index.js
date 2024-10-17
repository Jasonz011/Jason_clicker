// Counter App
let display = document.getElementById("count-el");
display.innerText = 0;
let button = document.getElementById("increment-btn");
let count = 0;




let history = document.createElement("p");
history.innerText = "Previous entries: ";
let section = document.getElementsByTagName("div")[0];
section.appendChild(history);




function increment() {
    count++;
    console.log(count);
    display.innerText = count;
}


function save() {
    history.innerText += " " + count + " -";
}


function reset() {
  count = 0;
  display.innerText = count;
}
