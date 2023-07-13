let menu = document.querySelector('#micon');
let navbar = document.querySelector('.navbar');



menu.onclick =  () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
}





const dropdownBtn = document.getElementById("btnn");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("img1");



const toggleDropdown = function () {
    dropdownMenu.classList.toggle("show");
    toggleArrow.classList.toggle("dropdown");
  };

  dropdownBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleDropdown();
  });

  document.documentElement.addEventListener("click", function () {
    if (dropdownMenu.classList.contains("show")) {
      toggleDropdown();
    }
  });