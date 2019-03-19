// JavaScript


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
var database = firebase.database();

//fake data to make random recipe cards appear
var recipeTitle = ["pizza", "ice cream", "candy", "cake", "pizza", "ice cream", "candy", "cake"];
var recipePic = ["./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg"];
//generate initial cards
//cardCreate(); throwing an error;
$(document).ready(function () {
    //TODO: plug in API call to random recipes here!!! Insert over fakeRecipe arrays (title and pic)

    var randomRecipesDiv = $("#ramdomRecipes");
    for (let index = 0; index < recipeTitle.length; index++) {
        const title = recipeTitle[index];
        const picSrc = recipePic[index];
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

///Nackles app.js///
var recipeTitle = [];
var recipePic = [];
var recipeId = [];
//base URL + recipePic[index] = hosted image path
var baseURL = "https://spoonacular.com/recipeImages/";
var randomRecipesDiv = $("#ramdomRecipes");

//////////////////
//GIPHY API CALL//
//////////////////
function findRecipe(event={}) {
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
/*Stage 2, ingredient list will be in a card with 4 pieces.
Image pulled from API as the card head.
Name of recipe("recipeTitle") pulled from API as card title. =  pulled as cardTitle("recipeCard??)
List of ingredients pulled from API as a checklist in card body.
Each ingredient should be its own line with a check box.
The line should be crossed through if the box is checked.
A button at the bottom of the card should redirect to stage 2.5 (map url). */
$("#id").on("click", function(event) { //test:(recipe)#id//as a result of load, set up a fxn for something  to happen asynchoronosly upon 'click'
    event.preventDefault();

        var titleId = 'title' + sessionStorage.getItem('idOfClicked');
        var title = sessionStorage.getItem(titleId);
        $('title').html(title);
        //Get the (recipe)#id of the clicked recipe
        var id = url.split('?')[1].split('=')[1];
        
        //API Request
        searching = "kale";
        // console.log(searching); = "kale"
        var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?number=8&instructionsRequired=true&query=" + searching;
        console.log(queryURL);
        var recipeApi = $.ajax({
                            url: queryURL,
                            method: "GET",
                            headers: { "X-RapidAPI-Key": "9a78976a75msh4fb280544b8746fp163b0ejsn08107d9989de" }
                        }).then(function(result) {
                            console.log(result.status, 
                                        result.headers, 
                                        result.body);
                        });
        //Parse what API returns
        var recipeParsed = JSON.parse(recipeApi.response);
        var recipe = recipeParsed.recipe;
        var container = $('<div/>')
            .attr('id', 'container')
            .appendTo('body');
        var main = $('<div/>')
            .attr('id', 'main')
            .appendTo(container);
    
        //Add image to DOM & Image pulled from API as the card head.
        var imgUrl = sessionStorage.getItem('imageURL' + sessionStorage.getItem('idOfClicked'));
        var img = $('<img/>')
            .attr('id', 'img')
            .attr('src', imgUrl);
        main.append(img);
    
        //Add title + recipe to DOM; Name of recipe("recipeTitle") pulled from API as card title.
        var recipeDiv = $('<div/>')
            .attr('id', 'recipe');
        recipeDiv.html("<span id='title'><b>" + title + "</b></span>" + recipe);
        main.append(recipeDiv);
    
        //Add ingredients to DOM
        var ingredients = $('<div/>')
        	.attr('id', 'ingredients')
    
    
        var clear = $('<br/>')
            .addClass('clear');
        main.append(clear);
    
        var description = $('<div/>')
            .addClass('description');
        container.append(description)
    
    
        // CREATE INGREDIENTS SECTION
        var ingredientsTitle = $('<span/>')
            .attr('id', 'ingredientsTitle')
            .html("Ingredients");
    
        var ingredients = $('<div/>')
            .append(ingredientsTitle)
            .addClass('ingredients');
    
        // Append all sections to DOM
        instructions.append(instructionUl);
        ingredients.append(ingredientsUl);
    })   
  
    
    // $("p").click(function(){
    //     $(this).hide();
    // });
    // // Handle the errors
    // function (errorObject) {
    //     console.log("Errors handled: " + errorObject.code);
    // };

   

