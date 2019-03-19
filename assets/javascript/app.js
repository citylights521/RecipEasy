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





//fake data to make random recipe cards appear
var fakeRecipeTitle = ["pizza", "ice cream", "candy", "cake", "pizza", "ice cream", "candy", "cake"];
var fakeRecipePic = ["./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg"];

$(document).ready(function () {
    //enables splitchar to print to page
    $(".splitchar").splitchar();
    
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
    };

    $(".card-img-top").on("click", function () {
        console.log("clicked a card"); 
    var chosenRecipeDiv = $("#chosenRecipe");
        // data-title is tentative
        const chosenTitle = $(this).attr(data-title);
        const chosenPicSrc = picSrc;
        // outer div column
        var chosenRecipeDiv = $("<div>");
        chosenRecipeDiv.attr("class", "col-md chosenRecipeDiv");
        //inner recipe div
        var chosenRecipeCard = $("<div>");
        chosenRecipeCard.attr("class", "card chosenRecipeCard");
        //generates recipe card image
        var chosenRecipeImage = $("<img>");
        chosenRecipeImage.attr("class", "card-img-top");
        chosenRecipeImage.attr("src", chosenPicSrc);
        chosenRecipeCard.append(chosenRecipeImage);
        var cardBody = $("<div>");
        cardBody.attr("class", "card-body");
        // ingredients is a placeholder. It needs to be connected to the API
        // this may not work
        for (let index = 0; index < ingredients.length; index++) {
            cardBody.append('<input type="checkbox" /> ' + ingredient[i] + '<br />')
        };
        var mapButton = $('<input/>').attr({ type: 'button', name:'mapBtn', value:'Get the Goods' });
        chosenRecipeCard.append(mapButton)
    });

});
