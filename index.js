let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  renderLeads();
  inputEl.value = "";
});

function renderLeads() {
  const listItems = `
    <li>
      <a target="_blank" rel="noopener noreferrer" href="${inputEl.value}">
        ${inputEl.value}
      </a>
    </li>
  `;
  ulEl.innerHTML += listItems;
}
