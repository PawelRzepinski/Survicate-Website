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

});