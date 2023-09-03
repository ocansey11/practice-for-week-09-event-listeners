// Your code here
window.addEventListener("DOMContentLoaded", (event) => {
  alert("DOM has been sucessfully loaded");

  // declare event functions
  function paintRed(event) {
    let eavesDroppedWord = event.target.value;

    let arr = eavesDroppedWord.split(" ");
    if (arr.includes("red")) {
      redInput.style.background = "red";
    }
  }

  //2
  function addList(event) {
    let eavesDroppedWord = listAdd.value;
    ul.innerHTML += `<li> ${eavesDroppedWord} </li>`;
  }

  //3
  function bgColor(event) {
    console.log("Selected");
    sectionThree.style.background = `${event.target.value}`;
    console.log(event.target.value);
  }

  //Declarations
  let redInput = document.getElementById("red-input");
  //   2
  let addItem = document.getElementById("add-item");
  let listAdd = document.getElementById("list-add");
  let sectionTwo = document.getElementById("section-2");
  let ul = sectionTwo.children[1];
  //3
  let color = document.getElementById("color-select");
  let sectionThree = document.getElementById("section-3");

  //   EventListeners
  redInput.addEventListener("input", paintRed);
  addItem.addEventListener("click", addList);
  color.addEventListener("change", bgColor);

  //Removing EventListeners
  let remove = document.getElementById("remove-listeners");
  remove.addEventListener("click", () => {
    console.log("Delete!");
    redInput.removeEventListener("input", paintRed, false);
    addItem.removeEventListener("click", addList, false);
    color.removeEventListener("select", bgColor, false);
  });

  //Readding the eventListeners
  let addListeners = document.getElementById("add-listeners");

  function readd() {
    console.log("jdj");
    redInput.addEventListener("input", paintRed, true);
    addItem.addEventListener("click", addList, true);
    color.addEventListener("change", bgColor, false);
  }

  addListeners.addEventListener("click", readd);

  //Bonus
  let sectionFive = document.getElementById("section-5");
  let div = sectionFive.children[0];

  function hovering() {
    console.log(div);
    div.innerHTML += "<h1>hovering</h1>";
  }
  sectionFive.addEventListener("mouseover", hovering);
});
