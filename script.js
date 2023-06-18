document.addEventListener("DOMContentLoaded", function() {
    var menuToggle = document.getElementById("menu-toggle");
    var menu = document.querySelector(".menu");
    var submenuItems = document.querySelector(".submenu-items");
  
    menuToggle.addEventListener("change", function() {
      if (menuToggle.checked) {
        menu.style.display = "block";
      } else {
        menu.style.display = "none";
        submenuItems.style.display = "none";
      }
    });
  
    var submenuToggle = document.querySelector(".submenu > a");
    submenuToggle.addEventListener("click", function(e) {
      e.preventDefault();
      submenuItems.style.display = "block";
    });
  });
  