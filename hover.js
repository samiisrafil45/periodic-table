



// glow p-block elements on hover
var selectP = document.querySelector(".alkali-metals");

selectP.addEventListener("mousemove", () => {
    var allElements = document.querySelectorAll("DIV");
if( allElements.clasName === "alkali-earth-metal-item" ){
    allElements.forEach((element) => {
        // element.style.opacity = 0.4; 
        console.log(element)


    });

}

 

    // let pBlockElements = document.querySelectorAll(".p-block");
    var alkaliEarthMetals= document.querySelectorAll(".alkali-earth-metal-item");
    alkaliEarthMetals.forEach((element) => {
        element.style.opacity = 1; 
        // element.style.boxShadow = "0 0 20px  9ecaed";
        element.style.transform= "scale(1.05)";
        // element.style.filter = "brightness(100%)";
        // element.style.filter = "contrast(120%)"

    });
});

selectP.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll("div");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    // let pBlockElements = document.querySelectorAll(".p-block");
    var alkaliEarthMetals= document.querySelectorAll(".alkali-earth-metal-item");
    alkaliEarthMetals.forEach((element) => {


        element.style.borderColor = 'black';
        element.style.boxShadow = "none";
    });
});
