function appendChildren(container, items) {
  for (tag of items) {
    container.appendChild(tag);
  }
}

const body = document.querySelector("body");
const container = document.createElement("div");
container.className = "div-container";
const listTitle = document.createElement("h3");
listTitle.textContent = "my to do list";
listTitle.classList.add("list-title");
const insertInput = document.createElement("input");
insertInput.id = "insert-input";
insertInput.placeholder = "Title";

const addBtn = document.createElement("button");
addBtn.textContent = "Add";
addBtn.id = "add-button";

const list = document.createElement("ul");

appendChildren(container, [listTitle, insertInput, addBtn, list]);
body.appendChild(container);

addBtn.addEventListener("click", addToDoThings);

function addToDoThings() {
  const item = document.createElement("li");

  const closeIcon = document.createElement("ion-icon");
  closeIcon.setAttribute("name", "close-circle-outline");
  closeIcon.className = "close-icon";
  const insertInputValue = insertInput.value;
  item.textContent = insertInputValue;
  item.appendChild(closeIcon);
  list.appendChild(item);
  item.addEventListener("click", () => selectItem(item));
  closeIcon.addEventListener("click", () => deleteItem(item, list));
}

function selectItem(item) {
  const iconSelect = document.createElement("ion-icon");
  iconSelect.setAttribute("name", "checkmark-outline");
  iconSelect.className = "checkmark";
  item.appendChild(iconSelect);
  item.className = "item-selected";
}

function deleteItem(item, list) {
  list.removeChild(item);
}
//Test

console.log(fetch("https://youtube.com"));
