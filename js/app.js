document.addEventListener("DOMContentLoaded", function () {

    /* slider */

    const nextBtn = document.querySelector(".slider_next");
    const prevBtn = document.querySelector(".slider_prev");
    const list = document.querySelectorAll(".slider_content_active li");
    var index = 0;


    list[index].classList = "visible";

    function clickPrev(){
        list[index].classList.toggle("visible");
        index --;

        if(index <= 0){
            index = list.length - 1;
        }

        list[index].classList.toggle("visible");
        console.log(list[index] + "   był klik prev");
    }

    function clickNext(){
        list[index].classList.toggle("visible");
        index++;

        if(index >= list.length){
            index = 0;
        }

        list[index].classList.toggle("visible");
        console.log("był klik next");
        console.log(index);
    }

    prevBtn.addEventListener("click", clickPrev);
    nextBtn.addEventListener("click", clickNext);


    /* pop-up*/

    const logIn = document.querySelector(".boldLi");
    const popup = document.querySelector(".popup");
    const popupBtn = document.querySelector(".popupBtn");

    logIn.addEventListener("click", function () {
        popup.style.display = "flex";
    });

    /* pop-up 768px*/

    const logInSmall = document.querySelector(".boldLiSmall");

    logInSmall.addEventListener("click", function () {
        popup.style.display = "flex";
    });

    popupBtn.addEventListener("click", function () {
       this.classList.toggle("shadow");
    });

    /* sign up free button*/

    const freeBtn = document.querySelectorAll(".free");
    const signPopup = document.querySelector(".sign_popup");

    for (let i = 0; i < freeBtn.length; i++) {
        freeBtn[i].onclick = function () {
            signPopup.style.display = "flex"
        }
    }

    /* sign up free button 768px*/

    const freeBtnSmall = document.querySelector(".btnSmall");

    freeBtnSmall.addEventListener("click", function () {
        signPopup.style.display = "flex";
    });

    /* popup input*/


});