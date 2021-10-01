



// *****************************glow ALKALI METALS ON HOVER elements on hover****************************


// Getting the element onto which we have to hover
const selectAlkaliMetals = document.querySelector(".alkali-metals");

// adding event on the above element
selectAlkaliMetals.addEventListener("mousemove", () => {

    
   // At first we have to give class named "element" to all the elements and then get all the elements 
    var allElements = document.querySelectorAll(".element");

    // Changing opacity to 0.3 of all the elements with className "element" and opacity to 1 onto which we have already hovered
    
     allElements.forEach((element) => {
          element.style.opacity = 0.3; 
          selectAlkaliMetals.style.opacity= 1;


    });



// Changing opacity to 1 of all the elements corresponding to selected/hovered feild(alkali metals for now)
    var alkaliEarthMetals= document.querySelectorAll(".alkali-earth-metal-item");
    alkaliEarthMetals.forEach((element) => {
        element.style.opacity = 1; 
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";

  
    });


});


//for mouseout
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
