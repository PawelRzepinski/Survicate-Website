document.addEventListener("DOMContentLoaded", function () {

    const nextBtn = document.querySelector(".slider_next");
    const prevBtn = document.querySelector(".slider_prev");
    const list = document.querySelectorAll(".slider_content_active li");
    var index = 0;


    list[index].classList = "visible";
    console.log(list[index]);

    function clickPrev(){
        list[index].classList.toggle("visible");
        index --;

        if(index <= 0){
            index = list.length - 1;
        }

        list[index].classList.toggle("visible");
        console.log("był klik prev");
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
    };

    prevBtn.addEventListener("click", clickPrev);
    nextBtn.addEventListener("click", clickNext);


    /* pop-up*/

    const logIn = document.querySelector(".boldLi");
    const popup = document.querySelector(".popup");
    const popupBtn = document.querySelector(".popupBtn");

    logIn.addEventListener("click", function () {
        console.log("działa kliknięcie");
        popup.style.display = "flex";
    });

    popupBtn.addEventListener("click", function () {
       this.classList.toggle("shadow");
       console.log("cień działa");
    })
});