let myLeads = JSON.parse(localStorage.getItem("myLeads"));
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

if (!myLeads) {
  myLeads = [];
} else {
  for (const lead of myLeads) {
    renderLeads(lead);
  }
}

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

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads(inputEl.value);
  inputEl.value = "";
});

deleteBtn.addEventListener("dblclick", () => {
  localStorage.clear();
  myLeads = [];
  ulEl.innerHTML = "";
});

tabBtn.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let activeTabUrl = tabs[0].url;
    myLeads.push(activeTabUrl);
    renderLeads(activeTabUrl);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
  });
});
