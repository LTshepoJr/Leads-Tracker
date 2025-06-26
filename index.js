let myLeads = JSON.parse(localStorage.getItem("myLeads"));
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");

if (!myLeads) {
  myLeads = [];
} else {
  for (const lead of myLeads) {
    renderLeads(lead);
  }
}

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads(inputEl.value);
  inputEl.value = "";
});

function renderLeads(lead) {
  const listItems = `
    <li>
      <a target="_blank" rel="noopener noreferrer" href="${lead}">
        ${lead}
      </a>
    </li>
  `;
  ulEl.innerHTML += listItems;
}

deleteBtn.addEventListener("dblclick", () => {
  localStorage.clear();
  myLeads = [];
  ulEl.innerHTML = "";
});
