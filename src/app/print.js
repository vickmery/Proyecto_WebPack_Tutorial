
const featuresBtn = document.querySelector(".header__buttonFeatures");
const companySelect = document.querySelector(".header__buttonCompany");
const test = document.querySelector(".header__test")
const loginBtns = document.querySelector('.header__login')
const test2 = document.querySelector(".header__test2")


let isVisible1 = false; // variable para verificar si el contenido está visible
let isVisible2 = false; 
featuresBtn.addEventListener('click', (event) => {
  test.setAttribute('list', 'true');

  if (isVisible1) {
    test.style.setProperty('visibility', 'hidden');
    test.style.setProperty('position', 'absolute');
    loginBtns.style.setProperty('top', '100vw');
    isVisible1 = false;
  } else {
    test.style.setProperty('visibility', 'visible');
    test.style.setProperty('position', 'relative');
    loginBtns.style.setProperty('top', '120vw');
    
    isVisible1 = true;
  }
})


test.innerHTML += `
  <section class="icon__list">
      <li><a href="#"><img src="https://raw.githubusercontent.com/vickmery/Workshop2Land-Page/Develop/imgs/icon-todo.svg"/> Todo List</a></li>
      <li><a href="#"><img src="https://raw.githubusercontent.com/vickmery/Workshop2Land-Page/Develop/imgs/icon-calendar.svg"/> Calendar</a></li>
      <li><a href="#"><img src="https://raw.githubusercontent.com/vickmery/Workshop2Land-Page/Develop/imgs/icon-reminders.svg"/> Reminders</a></li>
      <li><a href="#"><img src="https://raw.githubusercontent.com/vickmery/Workshop2Land-Page/Develop/imgs/icon-planning.svg"/> Planning</a></li>
  </section>
        `;

        
        companySelect.addEventListener('click', (event) => {
          test2.setAttribute('list', 'true');
          if (isVisible2) {
            test2.style.setProperty('visibility', 'hidden');
            test2.style.setProperty('position', 'absolute');
            loginBtns.style.setProperty('top', '110vw');
            isVisible2 = false;
          } else {
            test2.style.setProperty('visibility', 'visible');
            test2.style.setProperty('position', 'relative');
            loginBtns.style.setProperty('top', '150vw');
            
            isVisible2 = true;
          }
        })


test2.innerHTML +=`
<section class="link__list">
      <li><a>History</a></li>
      <li><a>Our Team</a></li>
      <li><a>Blog</a></li>
</section>

`