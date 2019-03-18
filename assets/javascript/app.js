// JavaScript
<<<<<<< HEAD
$(window).on("load", function() {
console.log("loaded");

})
=======

>>>>>>> b59f3393712ef9d03accba2f2dcfb2c268029072





<<<<<<< HEAD


/////////////
//FUNCTIONS//
/////////////

///////////////////
//random 4 search//
///////////////////
function giphyCall(event) {
    var searchFor = event.target.id; //get search term
    console.log(searchFor); //did it work

    var myAPI = "fpmcmDaPyMhRoYZdMK5FrTw9laKEKAWJ"; //unneccessary
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=" + myAPI + "&q=" + searchFor + "&limit=10&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    })

        // .then is our Promise => it is triggered on any response
        // pass in response as a parameter to capture the data obj returned
        .then(function (response) {
            console.log(response);
            $("#gif-collector").empty();
            for (let i = 0; i <= 9; i++) {
                //problem is somewhere below
                var aDiv = $("<div>")

                //constructing the imagetag
                var imageTag = $("<img>", {
                    src: response.data[i].images.original_still.url,
                    class: "p-3",
                    rating: response.data[i].rating,
                    still: response.data[i].images.original_still.url,
                    state: "still",
                    moving: response.data[i].images.original.url,
                    value: ("Rated " + response.data[i].rating),
                    alt: "gifferondo",
                    click: function (event) {
                        event.preventDefault();
                        var state = $(this).attr("state");
                        if (state === "still") {
                            $(this).attr("src", $(this).attr("moving"));
                            $(this).attr("state", "animate");
                            console.log("STILLED IMAGE");
                        } else {
                            $(this).attr("src", $(this).attr("still"));
                            $(this).attr("state", "still");
                            console.log("NOT");
                        }
                    }

                });

                //add the div to gif-collector, add image-tag to div, add rating text next to image
                $("#gif-collector").append(aDiv);
                aDiv.append(imageTag);
                aDiv.append(response.data[i].rating);

            }


        });
};
=======
//fake data to make random recipe cards appear
var fakeRecipeTitle = ["pizza", "ice cream", "candy", "cake", "pizza", "ice cream", "candy", "cake"];
var fakeRecipePic = ["./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg"];

$(document).ready(function () {
    //TODO: plug in API call to random recipes here!!! Insert over fakeRecipe arrays (title and pic)


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

});
>>>>>>> b59f3393712ef9d03accba2f2dcfb2c268029072
