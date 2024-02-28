'use strict';
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnclose = document.querySelector(".close-modal");
const btnopen = document.querySelectorAll(".show-modal");
for(let i = 0; i < btnopen.length ; i++){
    btnopen[i].addEventListener("click", function() {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");     
    });
    btnclose.addEventListener("click" , function() {
        modal.classList.add("hidden");
        overlay.classList.add("hidden"); 
    });
    overlay.addEventListener("click",function(){
        modal.classList.add("hidden");
        overlay.classList.add("hidden");
    });
 












}