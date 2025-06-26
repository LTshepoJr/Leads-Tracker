let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  renderLeads();
  inputEl.value = "";
});

function renderLeads() {
  let listItems = "";
  for (const i in myLeads) {
    listItems += `
      <li>
        <a target="_blank" href="${myLeads[i]}"> ${myLeads[i]} </a>
      </li>
    `;
  }
  ulEl.innerHTML = listItems;
}
