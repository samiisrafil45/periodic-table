



// akali metal
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
    var alkaliMetals= document.querySelectorAll(".alkali-metal-item");
    alkaliMetals.forEach((element) => {
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

    var alkaliMetals= document.querySelectorAll(".alkali-metal-item");
    alkaliMetals.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});
// alkali earth metals
const selectAlkaliearthMetals = document.querySelector(".alkali-earth-metals");
selectAlkaliearthMetals.addEventListener("mousemove", () => {

    var allElements = document.querySelectorAll(".element");


     allElements.forEach((element) => {
          element.style.opacity = 0.3;
          selectAlkaliearthMetals.style.opacity= 1;


    });
    var alkaliearthMetals= document.querySelectorAll(".alkali-earth-metal-item");
    alkaliearthMetals.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";


    });


});


//for mouseout
selectAlkaliearthMetals.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var alkaliearthMetals= document.querySelectorAll(".alkali-earth-metal-item");
    alkaliearthMetals.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});

//transition-metals
const selecttransitionMetals = document.querySelector(".transition-metals");

selecttransitionMetals.addEventListener("mousemove", () => {

    var allElements = document.querySelectorAll(".element");

     allElements.forEach((element) => {
          element.style.opacity = 0.3;
          selecttransitionMetals.style.opacity= 1;


    });

    var transitionMetals= document.querySelectorAll(".transition-metal-item");
    transitionMetals.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";


    });


});


//for mouseout
selecttransitionMetals.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var tansitionMetals= document.querySelectorAll(".transition-metal-item");
    tansitionMetals.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});

//lanthanides
const selectlanthanides = document.querySelector(".lanthanides");

selectlanthanides.addEventListener("mousemove", () => {

    var allElements = document.querySelectorAll(".element");


     allElements.forEach((element) => {
          element.style.opacity = 0.3;
          selectlanthanides.style.opacity= 1;


    });

    var lanthanides= document.querySelectorAll(".lanthanides-item");
    lanthanides.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";


    });


});


//for mouseout
selectlanthanides.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var lanthanides= document.querySelectorAll(".lanthanides-item");
    lanthanides.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});
//actinides
const selectactinides = document.querySelector(".actinides");

selectactinides.addEventListener("mousemove", () => {

    var allElements = document.querySelectorAll(".element");


     allElements.forEach((element) => {
          element.style.opacity = 0.3;
          selectactinides.style.opacity= 1;


    });

    var actinides= document.querySelectorAll(".actinides-item");
    actinides.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";


    });


});


//for mouseout
selectactinides.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var actinides= document.querySelectorAll(".actinides-item");
    actinides.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});
//transition
const selectposttransition = document.querySelector(".post-transition-metals");

selectposttransition.addEventListener("mousemove", () => {

    var allElements = document.querySelectorAll(".element");


     allElements.forEach((element) => {
          element.style.opacity = 0.3;
          selectposttransition.style.opacity= 1;


    });

    var posttransition= document.querySelectorAll(".post-transition-metals-item");
    posttransition.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";


    });


});


//for mouseout
selectposttransition.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var posttransition= document.querySelectorAll(".post-transition-metals-item");
    posttransition.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});

//metalloids..............
const selectmetalloids = document.querySelector(".metalloids");

selectmetalloids.addEventListener("mousemove", () => {

    var allElements = document.querySelectorAll(".element");


     allElements.forEach((element) => {
          element.style.opacity = 0.3;
          selectmetalloids.style.opacity= 1;


    });

    var metalloids= document.querySelectorAll(".metalloids-item");
    metalloids.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";


    });


});


//for mouseout
selectmetalloids.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var metalloids= document.querySelectorAll(".metalloids-item");
    metalloids.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});
//non metal................
const selectnonmetal = document.querySelector(".other-non-metals");

selectnonmetal.addEventListener("mousemove", () => {

    var allElements = document.querySelectorAll(".element");


     allElements.forEach((element) => {
          element.style.opacity = 0.3;
          selectnonmetal.style.opacity= 1;


    });

    var nonmetal= document.querySelectorAll(".non-metals-item");
    nonmetal.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";


    });


});


//for mouseout
selectnonmetal.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var nonmetal= document.querySelectorAll(".non-metals-item");
    nonmetal.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});
//halogens...............
const selecthalogen = document.querySelector(".halogens");

selecthalogen.addEventListener("mousemove", () => {

    var allElements = document.querySelectorAll(".element");


     allElements.forEach((element) => {
          element.style.opacity = 0.3;
          selecthalogen.style.opacity= 1;


    });

    var halogen= document.querySelectorAll(".halogen-item");
    halogen.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";


    });


});


//for mouseout
selecthalogen.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var halogen= document.querySelectorAll(".halogen-item");
    halogen.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});
//Noble gass.......................................
const selectnobalgas = document.querySelector(".noble-gases");

selectnobalgas.addEventListener("mousemove", () => {

    var allElements = document.querySelectorAll(".element");


     allElements.forEach((element) => {
          element.style.opacity = 0.3;
          selecthalogen.style.opacity= 1;


    });

    var noblegass= document.querySelectorAll(".noble-gas-item");
    noblegass.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";


    });


});


//for mouseout
selectnobalgas.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var noblegass= document.querySelectorAll(".noble-gas-item");
    noblegass.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});



// *****************************glow GROUP WISE--ON HOVER elements on hover****************************

//GROUP 1
// Getting the element onto which we have to hover
const group1 = document.querySelector(".g1");

// adding event on the above element
group1.addEventListener("mousemove", () => {


   // At first we have to give class named "element" to all the elements and then get all the elements
    var allElements = document.querySelectorAll(".element");

    // Changing opacity to 0.3 of all the elements with className "element" and opacity to 1 onto which we have already hovered

     allElements.forEach((element) => {
          element.style.opacity = 0.3;
          group1.style.opacity= 1;
    });
// Changing opacity to 1 of all the elements corresponding to selected/hovered feild(alkali metals for now)
    var g1_items= document.querySelectorAll(".group-1");
    g1_items.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";
    });
});

//for mouseout
group1.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var g1_items= document.querySelectorAll(".group-1");
    g1_items.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});


//GROUP 2
// Getting the element onto which we have to hover
const group2 = document.querySelector(".g2");

// adding event on the above element
group2.addEventListener("mousemove", () => {


   // At first we have to give class named "element" to all the elements and then get all the elements
    var allElements = document.querySelectorAll(".element");

    // Changing opacity to 0.3 of all the elements with className "element" and opacity to 1 onto which we have already hovered

     allElements.forEach((element) => {
          element.style.opacity = 0.3;
          group2.style.opacity= 1;
    });
// Changing opacity to 1 of all the elements corresponding to selected/hovered feild(alkali metals for now)
    var g2_items= document.querySelectorAll(".group-2");
    g2_items.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";
    });
});

//for mouseout
group2.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var g2_items= document.querySelectorAll(".group-2");
    g2_items.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});

//GROUP 3
// Getting the element onto which we have to hover
const group3 = document.querySelector(".g3");

// adding event on the above element
group3.addEventListener("mousemove", () => {


   // At first we have to give class named "element" to all the elements and then get all the elements
    var allElements = document.querySelectorAll(".element");

    // Changing opacity to 0.3 of all the elements with className "element" and opacity to 1 onto which we have already hovered

     allElements.forEach((element) => {
          element.style.opacity = 0.3;
          group3.style.opacity= 1;
    });

// Changing opacity to 1 of all the elements corresponding to selected/hovered feild(alkali metals for now)
    var g3_items= document.querySelectorAll(".group-3");
    g3_items.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";
    });
});
//for mouseout
group3.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var g3_items= document.querySelectorAll(".group-3");
    g3_items.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});


//GROUP 4
// Getting the element onto which we have to hover
const group4 = document.querySelector(".g4");

// adding event on the above element
group4.addEventListener("mousemove", () => {


   // At first we have to give class named "element" to all the elements and then get all the elements
    var allElements = document.querySelectorAll(".element");

    // Changing opacity to 0.3 of all the elements with className "element" and opacity to 1 onto which we have already hovered

     allElements.forEach((element) => {
          element.style.opacity = 0.3;
          group4.style.opacity= 1;
    });
// Changing opacity to 1 of all the elements corresponding to selected/hovered feild(alkali metals for now)
    var g4_items= document.querySelectorAll(".group-4");
    g4_items.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";
    });
});

//for mouseout
group4.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var g4_items= document.querySelectorAll(".group-4");
    g4_items.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});



//GROUP 5
// Getting the element onto which we have to hover
const group5 = document.querySelector(".g5");

// adding event on the above element
group5.addEventListener("mousemove", () => {


   // At first we have to give class named "element" to all the elements and then get all the elements
    var allElements = document.querySelectorAll(".element");

    // Changing opacity to 0.3 of all the elements with className "element" and opacity to 1 onto which we have already hovered

     allElements.forEach((element) => {
          element.style.opacity = 0.3;
          group5.style.opacity= 1;
    });

// Changing opacity to 1 of all the elements corresponding to selected/hovered feild(alkali metals for now)
    var g5_items= document.querySelectorAll(".group-5");
    g5_items.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";
    });
});
//for mouseout
group5.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var g5_items= document.querySelectorAll(".group-5");
    g5_items.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});

//GROUP 6
// Getting the element onto which we have to hover
const group6 = document.querySelector(".g6");

// adding event on the above element
group6.addEventListener("mousemove", () => {


   // At first we have to give class named "element" to all the elements and then get all the elements
    var allElements = document.querySelectorAll(".element");

    // Changing opacity to 0.3 of all the elements with className "element" and opacity to 1 onto which we have already hovered

     allElements.forEach((element) => {
          element.style.opacity = 0.3;
          group6.style.opacity= 1;
    });
// Changing opacity to 1 of all the elements corresponding to selected/hovered feild(alkali metals for now)
    var g6_items= document.querySelectorAll(".group-6");
    g6_items.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";
    });
});

//for mouseout
group6.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var g6_items= document.querySelectorAll(".group-6");
    g6_items.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});


//GROUP 7
// Getting the element onto which we have to hover
const group7 = document.querySelector(".g7");

// adding event on the above element
group7.addEventListener("mousemove", () => {


   // At first we have to give class named "element" to all the elements and then get all the elements
    var allElements = document.querySelectorAll(".element");

    // Changing opacity to 0.3 of all the elements with className "element" and opacity to 1 onto which we have already hovered

     allElements.forEach((element) => {
          element.style.opacity = 0.3;
          group7.style.opacity= 1;
    });
// Changing opacity to 1 of all the elements corresponding to selected/hovered feild(alkali metals for now)
    var g7_items= document.querySelectorAll(".group-7");
    g7_items.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";
    });
});

//for mouseout
group7.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var g7_items= document.querySelectorAll(".group-7");
    g7_items.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});

//GROUP 8
// Getting the element onto which we have to hover
const group8 = document.querySelector(".g8");

// adding event on the above element
group8.addEventListener("mousemove", () => {


   // At first we have to give class named "element" to all the elements and then get all the elements
    var allElements = document.querySelectorAll(".element");

    // Changing opacity to 0.3 of all the elements with className "element" and opacity to 1 onto which we have already hovered

     allElements.forEach((element) => {
          element.style.opacity = 0.3;
          group8.style.opacity= 1;
    });

// Changing opacity to 1 of all the elements corresponding to selected/hovered feild(alkali metals for now)
    var g8_items= document.querySelectorAll(".group-8");
    g8_items.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";
    });
});
//for mouseout
group8.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var g8_items= document.querySelectorAll(".group-8");
    g8_items.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});


//GROUP 9
// Getting the element onto which we have to hover
const group9 = document.querySelector(".g9");

// adding event on the above element
group9.addEventListener("mousemove", () => {


   // At first we have to give class named "element" to all the elements and then get all the elements
    var allElements = document.querySelectorAll(".element");

    // Changing opacity to 0.3 of all the elements with className "element" and opacity to 1 onto which we have already hovered

     allElements.forEach((element) => {
          element.style.opacity = 0.3;
          group9.style.opacity= 1;
    });
// Changing opacity to 1 of all the elements corresponding to selected/hovered feild(alkali metals for now)
    var g9_items= document.querySelectorAll(".group-9");
    g9_items.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";
    });
});

//for mouseout
group9.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var g9_items= document.querySelectorAll(".group-9");
    g9_items.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});



//GROUP 10
// Getting the element onto which we have to hover
const group10 = document.querySelector(".g10");

// adding event on the above element
group10.addEventListener("mousemove", () => {


   // At first we have to give class named "element" to all the elements and then get all the elements
    var allElements = document.querySelectorAll(".element");

    // Changing opacity to 0.3 of all the elements with className "element" and opacity to 1 onto which we have already hovered

     allElements.forEach((element) => {
          element.style.opacity = 0.3;
          group10.style.opacity= 1;
    });

// Changing opacity to 1 of all the elements corresponding to selected/hovered feild(alkali metals for now)
    var g10_items= document.querySelectorAll(".group-10");
    g10_items.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";
    });
});
//for mouseout
group10.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var g10_items= document.querySelectorAll(".group-10");
    g10_items.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});

///////--------------------------------------------------------------------------
//GROUP 11
// Getting the element onto which we have to hover
const group11 = document.querySelector(".g11");

// adding event on the above element
group11.addEventListener("mousemove", () => {


   // At first we have to give class named "element" to all the elements and then get all the elements
    var allElements = document.querySelectorAll(".element");

    // Changing opacity to 0.3 of all the elements with className "element" and opacity to 1 onto which we have already hovered

     allElements.forEach((element) => {
          element.style.opacity = 0.3;
          group11.style.opacity= 1;
    });
// Changing opacity to 1 of all the elements corresponding to selected/hovered feild(alkali metals for now)
    var g11_items= document.querySelectorAll(".group-11");
    g11_items.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";
    });
});

//for mouseout
group11.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var g11_items= document.querySelectorAll(".group-11");
    g11_items.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});


//GROUP 12
// Getting the element onto which we have to hover
const group12 = document.querySelector(".g12");

// adding event on the above element
group12.addEventListener("mousemove", () => {


   // At first we have to give class named "element" to all the elements and then get all the elements
    var allElements = document.querySelectorAll(".element");

    // Changing opacity to 0.3 of all the elements with className "element" and opacity to 1 onto which we have already hovered

     allElements.forEach((element) => {
          element.style.opacity = 0.3;
          group12.style.opacity= 1;
    });
// Changing opacity to 1 of all the elements corresponding to selected/hovered feild(alkali metals for now)
    var g12_items= document.querySelectorAll(".group-12");
    g12_items.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";
    });
});

//for mouseout
group12.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var g12_items= document.querySelectorAll(".group-12");
    g12_items.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});

//GROUP 3
// Getting the element onto which we have to hover
const group13 = document.querySelector(".g13");

// adding event on the above element
group13.addEventListener("mousemove", () => {


   // At first we have to give class named "element" to all the elements and then get all the elements
    var allElements = document.querySelectorAll(".element");

    // Changing opacity to 0.3 of all the elements with className "element" and opacity to 1 onto which we have already hovered

     allElements.forEach((element) => {
          element.style.opacity = 0.3;
          group13.style.opacity= 1;
    });

// Changing opacity to 1 of all the elements corresponding to selected/hovered feild(alkali metals for now)
    var g13_items= document.querySelectorAll(".group-13");
    g13_items.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";
    });
});
//for mouseout
group13.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var g13_items= document.querySelectorAll(".group-13");
    g13_items.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});


//GROUP 4
// Getting the element onto which we have to hover
const group14 = document.querySelector(".g14");

// adding event on the above element
group14.addEventListener("mousemove", () => {


   // At first we have to give class named "element" to all the elements and then get all the elements
    var allElements = document.querySelectorAll(".element");

    // Changing opacity to 0.3 of all the elements with className "element" and opacity to 1 onto which we have already hovered

     allElements.forEach((element) => {
          element.style.opacity = 0.3;
          group14.style.opacity= 1;
    });
// Changing opacity to 1 of all the elements corresponding to selected/hovered feild(alkali metals for now)
    var g14_items= document.querySelectorAll(".group-14");
    g14_items.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";
    });
});

//for mouseout
group14.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var g14_items= document.querySelectorAll(".group-14");
    g14_items.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});



//GROUP 5
// Getting the element onto which we have to hover
const group15 = document.querySelector(".g15");

// adding event on the above element
group15.addEventListener("mousemove", () => {


   // At first we have to give class named "element" to all the elements and then get all the elements
    var allElements = document.querySelectorAll(".element");

    // Changing opacity to 0.3 of all the elements with className "element" and opacity to 1 onto which we have already hovered

     allElements.forEach((element) => {
          element.style.opacity = 0.3;
          group15.style.opacity= 1;
    });

// Changing opacity to 1 of all the elements corresponding to selected/hovered feild(alkali metals for now)
    var g15_items= document.querySelectorAll(".group-15");
    g15_items.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";
    });
});
//for mouseout
group15.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var g15_items= document.querySelectorAll(".group-15");
    g15_items.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});

//GROUP 6
// Getting the element onto which we have to hover
const group16 = document.querySelector(".g16");

// adding event on the above element
group16.addEventListener("mousemove", () => {


   // At first we have to give class named "element" to all the elements and then get all the elements
    var allElements = document.querySelectorAll(".element");

    // Changing opacity to 0.3 of all the elements with className "element" and opacity to 1 onto which we have already hovered

     allElements.forEach((element) => {
          element.style.opacity = 0.3;
          group16.style.opacity= 1;
    });
// Changing opacity to 1 of all the elements corresponding to selected/hovered feild(alkali metals for now)
    var g16_items= document.querySelectorAll(".group-16");
    g16_items.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";
    });
});

//for mouseout
group16.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var g16_items= document.querySelectorAll(".group-16");
    g16_items.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});


//GROUP 7
// Getting the element onto which we have to hover
const group17 = document.querySelector(".g17");

// adding event on the above element
group17.addEventListener("mousemove", () => {


   // At first we have to give class named "element" to all the elements and then get all the elements
    var allElements = document.querySelectorAll(".element");

    // Changing opacity to 0.3 of all the elements with className "element" and opacity to 1 onto which we have already hovered

     allElements.forEach((element) => {
          element.style.opacity = 0.3;
          group17.style.opacity= 1;
    });
// Changing opacity to 1 of all the elements corresponding to selected/hovered feild(alkali metals for now)
    var g17_items= document.querySelectorAll(".group-17");
    g17_items.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";
    });
});

//for mouseout
group17.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var g17_items= document.querySelectorAll(".group-17");
    g17_items.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});

//GROUP 18
// Getting the element onto which we have to hover
const group18 = document.querySelector(".g18");

// adding event on the above element
group18.addEventListener("mousemove", () => {


   // At first we have to give class named "element" to all the elements and then get all the elements
    var allElements = document.querySelectorAll(".element");

    // Changing opacity to 0.3 of all the elements with className "element" and opacity to 1 onto which we have already hovered

     allElements.forEach((element) => {
          element.style.opacity = 0.3;
          group18.style.opacity= 1;
    });

// Changing opacity to 1 of all the elements corresponding to selected/hovered feild(alkali metals for now)
    var g18_items= document.querySelectorAll(".group-18");
    g18_items.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";
    });
});
//for mouseout
group18.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var g18_items= document.querySelectorAll(".group-18");
    g18_items.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});


// ------------------------------------------------PERIOD PART----------------------------------------------------------



//PERIOD 1


// Getting the element onto which we have to hover
const period1 = document.querySelector(".p1");

// adding event on the above element
period1.addEventListener("mousemove", () => {


   // At first we have to give class named "element" to all the elements and then get all the elements
    var allElements = document.querySelectorAll(".element");

    // Changing opacity to 0.3 of all the elements with className "element" and opacity to 1 onto which we have already hovered

     allElements.forEach((element) => {
          element.style.opacity = 0.3;
          period1.style.opacity= 1;
    });
// Changing opacity to 1 of all the elements corresponding to selected/hovered feild
    var p1_items= document.querySelectorAll(".Period-1");
    p1_items.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";
    });
});

//for mouseout
period1.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var p1_items= document.querySelectorAll(".Period-1");
    p1_items.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});




//PERIOD 2



// Getting the element onto which we have to hover
const period2 = document.querySelector(".p2");

// adding event on the above element
period2.addEventListener("mousemove", () => {


   // At first we have to give class named "element" to all the elements and then get all the elements
    var allElements = document.querySelectorAll(".element");

    // Changing opacity to 0.3 of all the elements with className "element" and opacity to 1 onto which we have already hovered

     allElements.forEach((element) => {
          element.style.opacity = 0.3;
          period2.style.opacity= 1;
    });
// Changing opacity to 1 of all the elements corresponding to selected/hovered feild
    var p2_items= document.querySelectorAll(".Period-2");
    p2_items.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";
    });
});

//for mouseout
period2.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var p2_items= document.querySelectorAll(".Period-2");
    p2_items.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});



//PERIOD 3


// Getting the element onto which we have to hover
const period3 = document.querySelector(".p3");

// adding event on the above element
period3.addEventListener("mousemove", () => {


   // At first we have to give class named "element" to all the elements and then get all the elements
    var allElements = document.querySelectorAll(".element");

    // Changing opacity to 0.3 of all the elements with className "element" and opacity to 1 onto which we have already hovered

     allElements.forEach((element) => {
          element.style.opacity = 0.3;
          period3.style.opacity= 1;
    });
// Changing opacity to 1 of all the elements corresponding to selected/hovered feild)
    var p3_items= document.querySelectorAll(".Period-3");
    p3_items.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";
    });
});

//for mouseout
period3.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var p3_items= document.querySelectorAll(".Period-3");
    p3_items.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});



//PERIOD 4


// Getting the element onto which we have to hover
const period4 = document.querySelector(".p4");

// adding event on the above element
period4.addEventListener("mousemove", () => {


   // At first we have to give class named "element" to all the elements and then get all the elements
    var allElements = document.querySelectorAll(".element");

    // Changing opacity to 0.3 of all the elements with className "element" and opacity to 1 onto which we have already hovered

     allElements.forEach((element) => {
          element.style.opacity = 0.3;
          period4.style.opacity= 1;
    });
// Changing opacity to 1 of all the elements corresponding to selected/hovered feild
    var p4_items= document.querySelectorAll(".Period-4");
    p4_items.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";
    });
});

//for mouseout
period4.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var p4_items= document.querySelectorAll(".Period-4");
    p4_items.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});




//PERIOD 5



// Getting the element onto which we have to hover
const period5 = document.querySelector(".p5");

// adding event on the above element
period5.addEventListener("mousemove", () => {


   // At first we have to give class named "element" to all the elements and then get all the elements
    var allElements = document.querySelectorAll(".element");

    // Changing opacity to 0.3 of all the elements with className "element" and opacity to 1 onto which we have already hovered

     allElements.forEach((element) => {
          element.style.opacity = 0.3;
          period5.style.opacity= 1;
    });
// Changing opacity to 1 of all the elements corresponding to selected/hovered feild
    var p5_items= document.querySelectorAll(".Period-5");
    p5_items.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";
    });
});

//for mouseout
period5.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var p5_items= document.querySelectorAll(".Period-5");
    p5_items.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});




//PERIOD 6



// Getting the element onto which we have to hover
const period6 = document.querySelector(".p6");

// adding event on the above element
period6.addEventListener("mousemove", () => {


   // At first we have to give class named "element" to all the elements and then get all the elements
    var allElements = document.querySelectorAll(".element");

    // Changing opacity to 0.3 of all the elements with className "element" and opacity to 1 onto which we have already hovered

     allElements.forEach((element) => {
          element.style.opacity = 0.3;
          period6.style.opacity= 1;
    });
// Changing opacity to 1 of all the elements corresponding to selected/hovered feild
    var p6_items= document.querySelectorAll(".Period-6");
    p6_items.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";
    });
});

//for mouseout
period6.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var p6_items= document.querySelectorAll(".Period-6");
    p6_items.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});



//PERIOD 7


// Getting the element onto which we have to hover
const period7 = document.querySelector(".p7");

// adding event on the above element
period7.addEventListener("mousemove", () => {


   // At first we have to give class named "element" to all the elements and then get all the elements
    var allElements = document.querySelectorAll(".element");

    // Changing opacity to 0.3 of all the elements with className "element" and opacity to 1 onto which we have already hovered

     allElements.forEach((element) => {
          element.style.opacity = 0.3;
          period7.style.opacity= 1;
    });
// Changing opacity to 1 of all the elements corresponding to selected/hovered feild
    var p7_items= document.querySelectorAll(".Period-7");
    p7_items.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";
    });
});

//for mouseout
period7.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var p7_items= document.querySelectorAll(".Period-7");
    p7_items.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});



//------------------------------------------ LANTHANIDES & ACTANIDES--------------------------------------------------------------- 




//PERIOD 8 (LANTHANIDES)
// Getting the element onto which we have to hover
const period8 = document.querySelector(".p8");

// adding event on the above element
period8.addEventListener("mousemove", () => {


   // At first we have to give class named "element" to all the elements and then get all the elements
    var allElements = document.querySelectorAll(".element");

    // Changing opacity to 0.3 of all the elements with className "element" and opacity to 1 onto which we have already hovered

     allElements.forEach((element) => {
          element.style.opacity = 0.3;
          period8.style.opacity= 1;
    });
// Changing opacity to 1 of all the elements corresponding to selected/hovered feild
    var p8_items= document.querySelectorAll(".Period-8");
    p8_items.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";
    });
});

//for mouseout
period8.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var p8_items= document.querySelectorAll(".Period-8");
    p8_items.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});

//PERIOD 9 (ACTINIDES)
// Getting the element onto which we have to hover
const period9 = document.querySelector(".p9");

// adding event on the above element
period9.addEventListener("mousemove", () => {


   // At first we have to give class named "element" to all the elements and then get all the elements
    var allElements = document.querySelectorAll(".element");

    // Changing opacity to 0.3 of all the elements with className "element" and opacity to 1 onto which we have already hovered

     allElements.forEach((element) => {
          element.style.opacity = 0.3;
          period9.style.opacity= 1;
    });
// Changing opacity to 1 of all the elements corresponding to selected/hovered feild
    var p9_items= document.querySelectorAll(".Period-9");
    p9_items.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform= "scale(1.05)";
        element.style.boxShadow="0 0 20px #9ecaed";
    });
});

//for mouseout
period9.addEventListener("mouseout", () => {
    let allElements = document.querySelectorAll(".element");

    allElements.forEach((element) => {
        element.style.opacity = 1;
    });

    var p9_items= document.querySelectorAll(".Period-9");
    p9_items.forEach((element) => {

        element.style.transform= "scale(1)";

        element.style.boxShadow = "none";
    });
});
