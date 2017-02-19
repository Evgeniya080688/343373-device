var link = document.querySelector(".write-us");
var popup = document.querySelector(".modal-content");
var close = popup.querySelector(".modal-content-close");
var form = popup.querySelector("form");
var client = popup.querySelector("[name=client]");
var mail = popup.querySelector("[name=mail]");
var message = popup.querySelector("[name=message]");
var storageclient = localStorage.getItem("client");
var storagemail = localStorage.getItem("mail");

//открытие формы
link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("modal-content-show");

  if (storageclient && storagemail){
    client.value = storageclient;
    mail.value = storagemail;
    message.focus();
  }
  else if (storageclient) {
    client.value = storageclient;
    mail.focus();
  } else if (storagemail){
    mail.value = storagemail;
    message.focus();
  } else if (!storageclient && !storagemail){
    client.focus();
  }
});

//закрытие формы
close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-content-show");
  popup.classList.remove("modal-error");
});

//проверка валидности
form.addEventListener("submit", function(event) {
  event.preventDefault();
  popup.classList.remove("modal-error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("modal-error");
    if (!client.value && !mail.value) {
      client.classList.add("invalide-value");
      mail.classList.add("invalide-value");
    }
    else if (!client.value) {
      client.classList.add("invalide-value");
    }
    else if (!mail.value) {
      mail.classList.add("invalide-value");
    }
    else {
      localStorage.setItem("client", client.value);
    }
});

//закрытие по esc
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-content-show")) {
      popup.classList.remove("modal-content-show");
      popup.classList.remove("modal-error");
    }
  }
});

var maplink = document.querySelector(".map-contact");
var mappopup = document.querySelector(".modal-map");
var closemap = mappopup.querySelector(".modal-content-close");
var mapopen = document.querySelector(".js-open-map");

//открытие карты
maplink.addEventListener("click", function(event) {
  event.preventDefault();
  mappopup.classList.add("modal-content-show");
});

//закрытие карты
closemap.addEventListener("click", function(event) {
  event.preventDefault();
  mappopup.classList.remove("modal-content-show");
});
//закрытие по esc
window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (mappopup.classList.contains("modal-content-show")) {
      mappopup.classList.remove("modal-content-show");
    }
  }
});

//оживление банера

var slides = document.querySelectorAll('.banner-slide');
var activeSlide = 0;
var nextSlide=0;
var toggles = document.querySelectorAll('.list-style-nav');
var i=0;

for (i=0; i<toggles.length; i++) {
  toggles[i].onclick = function() {
    toggles[activeSlide].classList.remove('active');
    slides[activeSlide].classList.remove('active');
    activeSlide = +this.getAttribute('data-slide');
    this.classList.add('active');
    slides[activeSlide].classList.add('active');
  }
}

setInterval(function() {  /* запуск таймера */
  if (activeSlide<toggles.length-1) {
    nextSlide=activeSlide+1;}
  else if (activeSlide==toggles.length-1) {
    nextSlide=0;}
  toggles[activeSlide].classList.remove('active');
  slides[activeSlide].classList.remove('active');
  toggles[nextSlide].classList.add('active');
  slides[nextSlide].classList.add('active');
  activeSlide=nextSlide;
}, 2000);

//оживление инфоблока

var linkbtn1 = document.querySelector(".btn-delivery");
var linkbtn2 = document.querySelector(".btn-warranity");
var linkbtn3 = document.querySelector(".btn-credit");

var infoblock1 = document.querySelector(".info-delivery");
var infoblock2 = document.querySelector(".info-warranity");
var infoblock3 = document.querySelector(".info-credit");

linkbtn1.addEventListener("click", function(event) {
  event.preventDefault();
  infoblock2.classList.add("hidden-block");
  infoblock3.classList.add("hidden-block");
  infoblock1.classList.remove("hidden-block");
  linkbtn2.classList.remove("active-info");
  linkbtn3.classList.remove("active-info");
  linkbtn1.classList.add("active-info");
});

linkbtn2.addEventListener("click", function(event) {
  event.preventDefault();
  infoblock1.classList.add("hidden-block");
  infoblock3.classList.add("hidden-block");
  infoblock2.classList.remove("hidden-block");
  linkbtn1.classList.remove("active-info");
  linkbtn3.classList.remove("active-info");
  linkbtn2.classList.add("active-info");
});

linkbtn3.addEventListener("click", function(event) {
  event.preventDefault();
  infoblock1.classList.add("hidden-block");
  infoblock2.classList.add("hidden-block");
  infoblock3.classList.remove("hidden-block");
  linkbtn1.classList.remove("active-info");
  linkbtn2.classList.remove("active-info");
  linkbtn3.classList.add("active-info");
});
