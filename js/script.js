var mailButton = document.querySelector(".btn-mail");
var popup = document.querySelector(".modal-content");
var close = document.querySelector(".modal-content-close");
var form = popup.querySelector("form");
var username = popup.querySelector("[name=username]");
var mailto = popup.querySelector("[name=mail-to]");
/*var mailto = popup.querySelector("[name=mail-to]");
var username = popup.querySelector("[name=username]");*/
    
mailButton.addEventListener("click", function(event) {
  event.preventDefault();  
  popup.classList.add("modal-content-show");
  username.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
});

form.addEventListener("submit", function(event) {  
  if(!username.value || !mailto.value) {
    event.preventDefault();
    console.log("Введите имя и e-mail");
  }
});
