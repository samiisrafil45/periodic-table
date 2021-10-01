



// glow p-block elements on hover
const selectAlkaliMetals = document.querySelector(".alkali-metals");

selectAlkaliMetals.addEventListener("mousemove", () => {

    var allElements = document.querySelectorAll(".element");

     allElements.forEach((element) => {
          element.style.opacity = 0.3; 
          selectAlkaliMetals.style.opacity= 1;


    });




    var alkaliEarthMetals= document.querySelectorAll(".alkali-earth-metal-item");
    alkaliEarthMetals.forEach((element) => {
        element.style.opacity = 1; 
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";

  
    });


   





});

selectAlkaliMetals.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var alkaliEarthMetals= document.querySelectorAll(".alkali-earth-metal-item");
    alkaliEarthMetals.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});
