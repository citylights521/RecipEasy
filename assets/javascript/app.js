// JavaScript






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
    };

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
