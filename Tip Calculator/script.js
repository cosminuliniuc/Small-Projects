const body = document.querySelector("body");
const mainPage = renderPage();
body.appendChild(mainPage);

function renderPage() {
  const container = document.createElement("div");
  container.className = "c-container";
  const header = renderTitle();
  container.appendChild(header);

  const innerContainer = document.createElement("div");
  const billElement = renderBillElement();
  innerContainer.appendChild(billElement);
  const serviceElement = renderServiceElement();
  innerContainer.appendChild(serviceElement);
  const shareElement = renderShareElement();
  innerContainer.appendChild(shareElement);
  const buttonElement = renderButton();
  const result = document.createElement("p");
  buttonElement.addEventListener("click", () => {
    const billTotal = document.getElementById("money-amount").value;
    const billService = document.getElementById("service");
    const splitByPeople = document.getElementById("people-number").value;
    const showOption = billService.options[billService.selectedIndex].value;
    const tipTotal = Math.floor(
      (parseInt(billTotal) * parseInt(showOption)) / 100
    );
    result.textContent =
      "TIP AMOUNT " + "$ " + tipTotal / splitByPeople + " each";
    innerContainer.appendChild(result);
  });
  innerContainer.appendChild(buttonElement);
  container.appendChild(innerContainer);
  return container;
}

function renderTitle() {
  const divTitle = document.createElement("div");
  const title = document.createElement("h1");
  title.textContent = "tip calculator";
  title.classList.add("c-title");
  divTitle.appendChild(title);
  return divTitle;
}

function renderBillElement() {
  const estimateBill = document.createElement("div");
  estimateBill.className = "c-input";
  const billLabel = document.createElement("label");
  billLabel.textContent = "How much was your bill?";
  const billInput = document.createElement("input");
  billInput.type = "number";
  billInput.name = "bill";
  billInput.id = "money-amount";
  estimateBill.appendChild(billLabel);
  estimateBill.appendChild(billInput);
  return estimateBill;
}

function renderServiceElement() {
  const estimateService = document.createElement("div");
  estimateService.className = "c-input";
  const serviceLabel = document.createElement("label");
  serviceLabel.textContent = "How was your service";
  const selectService = document.createElement("select");
  selectService.id = "service";
  const serviceOptionOne = renderOption("Choose option", "Choose Option");
  const serviceOptionTwo = renderOption("30%", `30%-Outstanding`);
  const serviceOptionThree = renderOption("20%", "20%-Good");
  const serviceOptioFour = renderOption("15%", "15%-It was okay");
  const serviceOptionFive = renderOption("10%", "10%-Bad");
  const serviceOptioSix = renderOption("5%", "5%-Terrible");
  renderServiceSelectGroup(selectService, [
    serviceOptionOne,
    serviceOptionTwo,
    serviceOptionThree,
    serviceOptioFour,
    serviceOptionFive,
    serviceOptioSix,
  ]);
  estimateService.appendChild(serviceLabel);
  estimateService.appendChild(selectService);
  return estimateService;
}

function renderOption(value, content) {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = content;
  return option;
}

function renderServiceSelectGroup(select, options) {
  for (let items of options) {
    select.appendChild(items);
  }
}

function renderShareElement() {
  const estimatePeople = document.createElement("div");
  estimatePeople.className = "c-input";
  const shareLabel = document.createElement("label");
  shareLabel.textContent = "How many people are sharing the bill?";
  const shareInput = document.createElement("input");
  shareInput.type = "number";
  shareInput.name = "number";
  shareInput.id = "people-number";
  shareInput.min = 0;
  shareInput.max = 10;
  estimatePeople.appendChild(shareLabel);
  estimatePeople.appendChild(shareInput);
  return estimatePeople;
}

function renderButton() {
  const createButton = document.createElement("div");
  createButton.className = "c-button-div";
  const button = document.createElement("button");
  button.textContent = "calculate";
  button.classList.add("c-button");
  createButton.appendChild(button);
  return createButton;
}
