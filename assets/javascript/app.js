var fakeRecipeTitle = ["pizza", "ice cream", "candy", "cake", "pizza", "ice cream", "candy", "cake"];
var fakeRecipePic = ["./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg"];
let searching = 4;

// JavaScript
$(window).on("load", function () {
    //making sure the window loads
    console.log("loaded");

    //click handlers for recipe buttons go here

    //on enter/submit, run findRecipe with search 
    $("#getRecipe").submit(findRecipe);
    // $("#getRecipe").val()
    // $("#getRecipe").submit(function(event){
    //     event.preventDefault();
    //     console.log("something");
    // });

    console.log($("#getRecipe").val());
    var randomRecipesDiv = $("#ramdomRecipes");
    for (let index = 0; index < fakeRecipeTitle.length; index++) {
        const title = fakeRecipeTitle[index];
        const picSrc = fakeRecipePic[index];
        //outer div column
        var recipeDiv = $("<div>");
        recipeDiv.attr("class", "col-md recipeDiv");
        //inner recipe div
        var recipeCard = $("<div>");
        recipeCard.attr("class", "card recipeCard");
        //generates recipe card image
        var recipeImage = $("<img>");
        recipeImage.attr("class", "card-img-top");
        recipeImage.attr("src", picSrc);
        //adds image element to card
        recipeCard.append(recipeImage);
        //recipe card body
        var cardBody = $("<div>");
        cardBody.attr("class", "card-body");
        //generates card text aka title of recipe
        var p = $("<p>").text(title);
        p.attr("class", "card-text");
        //adds card text (recipe title) to the card body
        cardBody.append(p);
        //adds card body to the recipe card
        recipeCard.append(cardBody);
        //adds 
        recipeDiv.append(recipeCard);
        //the whole card enchilada
        randomRecipesDiv.append(recipeDiv);
    }
})
///////////////////
//FUNCTIONS BELOW//
///////////////////

//////////////////
//GIPHY API CALL//
//////////////////
function findRecipe(event) {
    event.preventDefault();
    console.log(event);
    let searchAmount = 4;
    searching = $("#getRecipe").val();
    console.log("searching = ", searching);

    if (searching = "") { console.log("searching was blank") } else (console.log("searching had characters!: ", searching));

    //on load, search for four random recipes AND display them below the search bar
    //on search, search for 10 recipes of "searchTerm" and bring up results

    var searching = $("#getRecipe").val();
    console.log(searching); //did it work

    var myAPI = "fpmcmDaPyMhRoYZdMK5FrTw9laKEKAWJ"; //unneccessary
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + myAPI + "&q=" + searching + "&limit=10&lang=en";

    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // })

    //     // .then is our Promise => it is triggered on any response
    //     // pass in response as a parameter to capture the data obj returned
    //     .then(function (response) {
    //         console.log(response);
    //         $("#gif-collector").empty();
    //         for (let i = 0; i <= 9; i++) {
    //             //problem is somewhere below
    //             var aDiv = $("<div>")

    //             //constructing the imagetag
    //             var imageTag = $("<img>", {
    //                 src: response.data[i].images.original_still.url,
    //                 class: "p-3",
    //                 rating: response.data[i].rating,
    //                 still: response.data[i].images.original_still.url,
    //                 state: "still",
    //                 moving: response.data[i].images.original.url,
    //                 value: ("Rated " + response.data[i].rating),
    //                 alt: "gifferondo",
    //                 click: function (event) {
    //                     event.preventDefault();
    //                     var state = $(this).attr("state");
    //                     if (state === "still") {
    //                         $(this).attr("src", $(this).attr("moving"));
    //                         $(this).attr("state", "animate");
    //                         console.log("STILLED IMAGE");
    //                     } else {
    //                         $(this).attr("src", $(this).attr("still"));
    //                         $(this).attr("state", "still");
    //                         console.log("NOT");
    //                     }
    //                 }

    //             });

    //             //add the div to gif-collector, add image-tag to div, add rating text next to image
    //             $("#gif-collector").append(aDiv);
    //             aDiv.append(imageTag);
    //             aDiv.append(response.data[i].rating);

    //         }


    //     });
};
