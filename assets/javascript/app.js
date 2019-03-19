var recipeTitle = [];
var recipePic = [];
var recipeId = [];

//base URL + recipePic[index] = hosted image path
var baseURL = "https://spoonacular.com/recipeImages/";


var randomRecipesDiv = $("#ramdomRecipes");
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBe5IDgG-aPGB5DUjJBIXzR9KOfJFBam-s",
    authDomain: "recipeasy-16148.firebaseapp.com",
    databaseURL: "https://recipeasy-16148.firebaseio.com",
    projectId: "recipeasy-16148",
    storageBucket: "recipeasy-16148.appspot.com",
    messagingSenderId: "654013257184"
};
firebase.initializeApp(config);

//safety RecipePic for formatting "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg"

//generate initial cards
cardCreate();

// JavaScript
$(window).on("load", function () {
    //making sure the window loads
    console.log("loaded");

    //click handlers for recipe buttons go here

splitcharTitle
//fake data to make random recipe cards appear
var fakeRecipeTitle = ["pizza", "ice cream", "candy", "cake", "pizza", "ice cream", "candy", "cake"];
var fakeRecipePic = ["./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg"];

$(document).ready(function () {
    //enables splitchar to print to page
    $(".splitchar").splitchar();
    
    //TODO: plug in API call to random recipes here!!! Insert over fakeRecipe arrays (title and pic)

    //on enter/submit, run findRecipe with search 
    $("#getRecipe").submit(findRecipe);
    // $("#getRecipe").val()
    // $("#getRecipe").submit(function(event){
    //     event.preventDefault();
    //     console.log("something");
    // });


})
///////////////////
//FUNCTIONS BELOW//
///////////////////

function cardCreate() {
    for (let index = 0; index < recipeTitle.length; index++) {
        const title = recipeTitle[index];
        const picSrc = baseURL + recipePic[index];
        const recipId = recipeId[index];
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
}

//////////////////
//GIPHY API CALL//
//////////////////
function findRecipe(event) {
    event.preventDefault();
    console.log("event ", event);
    var searching = $("#searchFor").val();
    console.log("searching = ", searching);

    //on load, search for four random recipes AND display them below the search bar
    //on search, search for 10 recipes of "searchTerm" and bring up results
    var myAPI = "fpmcmDaPyMhRoYZdMK5FrTw9laKEKAWJ"; //unneccessary


    var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?number=8&instructionsRequired=true&query=" + searching;
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET",
        headers: { "X-RapidAPI-Key": "9a78976a75msh4fb280544b8746fp163b0ejsn08107d9989de" }
    })

        // .then is our Promise => it is triggered on any response
        // pass in response as a parameter to capture the data obj returned
        .then(function (response) {
            console.log(response);
            //base url + image url = the image
    };

stage-2.5-card
    // onclick function for a given recipe image to move to stage 2
    // Creating a single card for a chosen recipe
    $(".card-img-top").on("click", function () {
        // this empties the div populated by the search function
        $("#ramdomRecipes").empty();
        // console log the click function of the images
        console.log("clicked a card"); 
        // declares the variable chosenRecipeDiv 
    var chosenRecipeDiv = $("#chosenRecipe");
        // data-title is tentative.
        const chosenTitle = $(this).attr(data-title);
        //declares the 
        const chosenPicSrc = recipeImage;
        // outer div column
        var chosenRecipeDiv = $("<div>");
        chosenRecipeDiv.attr("class", "col-md chosenRecipeDiv");
        // inner recipe div
        var chosenRecipeCard = $("<div>");
        chosenRecipeCard.attr("class", "card chosenRecipeCard");
        // generates recipe card image
        var chosenRecipeImage = $("<img>");
        // should create the top of the card and make it an image
        chosenRecipeImage.attr("class", "card-img-top");
        // should define the picture selected for onclick as the image in card-img-top
        chosenRecipeImage.attr("src", chosenPicSrc);
        // should set the picture selected for onclick as the image in card-img-top
        chosenRecipeCard.append(chosenRecipeImage);
        // creating the cardBody div
        var cardBody = $("<div>");
        // gives cardbody the class of card-body
        cardBody.attr("class", "card-body");
        // add the title from the API to the stage 2 card
        cardBody.append(chosenTitle);
        // ingredients is a placeholder. It needs to be connected to the API
        // this may not work, needs testing
        for (let index = 0; index < ingredients.length; index++) {
            cardBody.append('<input type="checkbox" /> ' + ingredient[i] + '<br />')
        };
        // declares a button to take you to the map (stage 2.5)
        var mapButton = $('<input/>').attr({ type: 'button', name:'mapBtn', id:'mapBtn', value:'Get the Goods' });
        // adds the button to the card
        chosenRecipeCard.append(mapButton);
        // a click function to change the recipe image to a dummy image of google maps
        $("#mapBtn").on("click", function() {
            $("#my_image").attr("src", "../mock-up-map.png");
        })

    });


});


            //empty the div for new results
            randomRecipesDiv.empty();
            //emptying the arrays for re-use
            recipeId = [];
            recipePic = [];
            reciptTitle = [];
            //populating the Arrays
            //it's giving us bonus results with no images I guess?
            //and weird amounts of images
            //
            for (var i = 0; i < response.results.length; i++) {
                recipeId.push(response.results[i].id);
                recipePic.push(response.results[i].imageUrls[0]);
                recipeTitle.push(response.results[i].title);
                //these are the arrays I'm feeding the cardCreate function above
            }
            cardCreate(recipeId, recipePic, recipeTitle, baseURL);
        });
};

