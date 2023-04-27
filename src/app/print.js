
const featuresBtn = document.querySelector(".header__buttonFeatures");
const companySelect = document.querySelector(".header__selectCompany");

featuresBtn.innerHTML += `
        <ul class="header__menuDropdownFeatures">
                  <li><a href="#"><img src="../../imgs/icon-todo.svg"/> Todo List</a></li>
                  <li><a href="#"><img src="../../imgs/icon-calendar.svg"/> Calendar</a></li>
                  <li><a href="#"><img src="../../imgs/icon-reminders.svg"/> Reminders</a></li>
                  <li><a href="#"><img src="/imgs/icon-planning.svg"/> Planning</a></li>
                </ul>
        `;

const companyOptions = [
  { value: "company1", label: "History" },
  { value: "company2", label: "Our Team" },
  { value: "company3", label: "Blog" },
];

companyOptions.forEach((option) => {
  const newOptionCompany = document.createElement("option");
  newOptionCompany.value = option.value;
  newOptionCompany.textContent = option.label;
  companySelect.appendChild(newOptionCompany);
});
