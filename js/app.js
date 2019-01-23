document.addEventListener("DOMContentLoaded", function () {

   const col = document.querySelectorAll("footer .col-2");
    console.log(col);
    /*
   window.addEventListener("resize", function () {
       if (window.innerWidth <= 1024){
           col.classList.toggle("col-6");
           console.log("to działa");
       }
   }); */


    function myFunction(x) {
        if (x.matches) { // If media query matches
            col.classList.toggle("col-4")
            /*document.body.style.backgroundColor = "yellow";*/
        } else {
            document.body.style.backgroundColor = "pink";
        }
    }

    var x = window.matchMedia("(max-width: 1024px)");
    myFunction(x); // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes

});