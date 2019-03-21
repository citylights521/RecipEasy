//Key thing to note: images from findRecipe and recipeDeets are sometimes wrong - that's a spoonacular API problem. From what we can tell and inspect, our code is working. Ex: A bread recipe turning up with an image of soup is marked by the API as something like banana_bread_id.jpg

// Initialize Firebase (source: Nick)
var config = {
    apiKey: "AIzaSyBou4YVPnz28duQK5_NmgIsFFZTWiz7Jjk",
    authDomain: "peasydiary.firebaseapp.com",
    databaseURL: "https://peasydiary.firebaseio.com",
    projectId: "peasydiary",
    storageBucket: "peasydiary.appspot.com",
    messagingSenderId: "71536492965"
};
firebase.initializeApp(config);
//end of firebase

var database = firebase.database();

var recipeTitle = [];
var recipePic = [];
var recipeId = [];
var deetsNumber = 0;

//globally accessible for diary: name and image link
var recipeName = "";
var recipeImage = "";
//recipeDeets will push instructions for selected recipes into this array
var deetInstructions = [];

//base URL + recipePic[index] = hosted image path
var baseURL = "https://spoonacular.com/recipeImages/";



var randomRecipesDiv = $("#randomRecipes");
var chosenRecipesDiv = $("#chosenRecipes");
var recipeInstructionsDiv = $("#recipeInstructions");


//safety RecipePic for formatting "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg"

//generate initial cards - there are no initial cards
// cardCreate();

// JavaScript
$(window).on("load", function () {
    //making sure the window loads
    console.log("loaded");

    randomRecipe();

    //click handlers for recipe buttons go here
    //fake data to make random recipe cards appear
    // var fakeRecipeTitle = ["pizza", "ice cream", "candy", "cake", "pizza", "ice cream", "candy", "cake"];
    // var fakeRecipePic = ["./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg", "./assets/images/blue-colors-cream-928475.jpg"];
});

$(document).ready(function () {
    //enables splitchar to print to page
    $(".splitchar").splitchar();

    //TODO: plug in API call to random recipes here!!! Insert over fakeRecipe arrays (title and pic)

    //on enter/submit, run findRecipe with search 
    $("#basic-addon2").click(findRecipe);
    $("#searchFor").on('keypress', function (e) {
        if (e.which == 13) {
            findRecipe(e);
        }
    });

    $("#diarySave").click(saveToDiary);

    // $("#getRecipe").val()
    // $("#getRecipe").submit(function(event){
    //     event.preventDefault();
    //     console.log("something");
    // });

    //for design purposes only, un-comment to see diary modal in html
    // $("#diaryModal").modal('show');


});
///////////////////
//FUNCTIONS BELOW//
///////////////////

//////////////////
//CARD GENERATOR//
//////////////////
function cardCreate() {
    for (let index = 0; index < recipeTitle.length; index++) {
        //variables for cards
        const title = recipeTitle[index];
        const picSrc = baseURL + recipePic[index];

        var recipId = recipeId[index];
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
        recipeImage.attr("recipe-id", recipId);
        recipeImage.on("click", recipeDeets);

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
// cardCreate();

//////////////////
//RECIPE SEARCH //
//////////////////
function findRecipe(event) {
    event.preventDefault();
    console.log("event ", event);
    var searching = $("#searchFor").val();
    console.log("searching = ", searching);

    //on search, search for recipes of "searchTerm" and bring up results
    var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?number=8&instructionsRequired=true&query=" + searching;

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
            chosenRecipesDiv.empty();
            //emptying the arrays for re-use
            recipeId.length = 0;
            recipePic.length = 0;
            recipeTitle.length = 0;
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
            cardCreate();
        });
}
///////////////////
//RECIPE DETAILS //
///////////////////
function recipeDeets(event) {
    //grabbing the recpie-id for the clicked image
    var searchid = $(this).attr("recipe-id");
    console.log("searching id = ", searchid);
    //constructing search url
    var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" + searchid + "/information";
    //hello spoonacular may i have recipe details please
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET",
        headers: { "X-RapidAPI-Key": "9a78976a75msh4fb280544b8746fp163b0ejsn08107d9989de" }
    }) //response.data.itemswewantgohere
        .then(function (response) {
            console.log(response);
            //empty the div for new results
            randomRecipesDiv.empty();
            console.log("div should be emptied");
            //variables for cards
            var chosenTitle = response.title;
            var chosenImage = response.image;


            //capturing diary variables for later
            diaryImage = chosenImage;
            diaryName = chosenTitle;


            //inner recipe div
            deetsNumber++;
            var chosenCardDiv = $("<div>");
            chosenCardDiv.attr("class", "card");
            chosenCardDiv.attr("id", "chosen-recipe-card"+deetsNumber);

            //creating the attaching image div
            var chosenRecipeImage = $("<img>");
            chosenRecipeImage.attr("class", "card-img-top");
            chosenRecipeImage.attr("id", "chosen-card-img-top")
            chosenRecipeImage.attr("src", chosenImage);

            //adds the recipe title to the cardbody
            chosenCardDiv.append(chosenRecipeImage);

            // //attaching the image after the title
            // chosenRecipeDiv.append(chosenRecipeImage);

            // creating the cardBody div for ingredients table w/BS
            var cardBody = $("<div>");
            cardBody.attr("class", "card-body");
            cardBody.attr("id", "chosen-card-body")

            //generates card text aka title of recipe
            var h3 = $("<h3>").text(chosenTitle);
            h3.attr("class", "card-text");
            var p = $("<h4>").text("Ingredients:");

            //add title and image to card body
            cardBody.append(h3);
            cardBody.append(chosenRecipeImage);
            cardBody.append(p);

            var checkBoxDiv = $("<div>");
            checkBoxDiv.attr("class", "checkbox-inlay");
            checkBoxDiv.attr("id", "listacle-"+deetsNumber);

            //for loop that populates the ingredients div after the title and image
            for (var i = 0; i < response.extendedIngredients.length; i++) {
                checkBoxDiv.append('<input type="checkbox" /> ' + response.extendedIngredients[i].original + '<br />')
            }
            cardBody.append(checkBoxDiv);

            //resetting deetInstructions array just in case
            deetInstructions.length = 0;
            //for loop that runs for every step in analyzed instructions
            for (var a = 0; a < response.analyzedInstructions.length; a++) {
                //for loop that pushes the steps within each analyzed instruction
                for (var i = 0; i < response.analyzedInstructions[a].steps.length; i++) {
                    deetInstructions.push(response.analyzedInstructions[a].steps[i].step);
                }
            }
            console.log(deetInstructions);
            //add buttons to go to stage 2.5 and 3
            var mapBtn = $("<button>").text("Get Shoppin!");
            mapBtn.attr("type", "button");
            mapBtn.attr("class", "btn btn-warning btn-lg map-btn");

            var instBtn = $("<button>").text("Get Cookin!");
            instBtn.attr("type", "button");
            instBtn.attr("class", "btn btn-warning btn-lg inst-btn");

            var clearBtn = $("<button>").text("Clear Recipe");
            clearBtn.attr("type", "button");
            clearBtn.attr("class", "btn btn-danger btn-lg clear-btn");

            cardBody.append(mapBtn);
            cardBody.append(instBtn);
            // cardBody.append(clearBtn);
            //add cardbody to recipediv
            chosenRecipesDiv.append(cardBody);

            $(".map-btn").click(function () {
                $("#mapModal").modal("show");
            })

            $(".clear-btn").click(function () {
                $(this).parent(".card-body").remove();
            });

            $(".inst-btn").click(function() {
                p.text("Instructions:");
                $("#listacle-"+deetsNumber).empty();
                console.log("clicked");
                for (var a = 0; a < deetInstructions.length; a++) {
                    checkBoxDiv.append('<input type="checkbox" /> ' + deetInstructions[a] + '<br />')
                    console.log("looped deetInstructions this many times");
                    //for loop that pushes the steps within each analyzed instruction                    
                }
                mapBtn.remove();
                instBtn.remove();
                // clearBtn.remove();

                var diaryBtn = $("<button>").text("Recipe Diary");
                diaryBtn.attr("type", "button");
                diaryBtn.attr("class", "btn btn-warning btn-lg diary-btn");

                var clearBtn = $("<button>").text("Clear Recipe");
                clearBtn.attr("type", "button");
                clearBtn.attr("class", "btn btn-danger btn-lg clear-btn");

                cardBody.append(clearBtn);
                cardBody.append(diaryBtn);

                $(".diary-btn").click(function () {
                    $("#diaryModal").modal("show");
                });

                $(".clear-btn").click(function () {
                    $(this).parent(".card-body").remove();
                });

            })

        });
}

////////////////////////////
//DISPLAY THE INSTRUCTIONS//
////////////////////////////
// THIS ONCLICK NEEDS A BUTTON
// $("#DISPLAYINSRUCTIONSBUTTONGRABE").on("click", displayInstr);

function displayInstr() {
    for (var i = 0; i < deetInstructions.length; i++) {
        //print current deetInstructions.index to target div/object(needsformatting)
        $("#recipeInstructions").append(deetInstructions[i] + "<br>");
    }

}

/////////
//DIARY//
/////////
//function to create ability to save from click event for recipe diary 
function saveToDiary(event) {
    var makeAgain = $("input[name='makeAgain']:checked").val();
    var rateRecipe = $("#diaryRateRecipe").val();
    var diaryNotes = $("#diaryNotes").val().trim();

    if (makeAgain == undefined || rateRecipe == "") {
        $("#diaryWarning").show();
        return;
    }

    //TODO:store to firebase

    //button function onclick {
    //DIARY ENTRY OBJECT (diaryName and diaryImage are global objects)
    var diaryEntry = {
        recipename: diaryName,
        recipeimage: diaryImage,
        recipeMake: makeAgain,
        reciperating: rateRecipe,
        recipenotes: diaryNotes
    };

    //pushes diaryEntry object into database
    database.ref().push(diaryEntry);
    //}

    $("#diaryModal").modal('hide');
}








//////////////////
//On page load RANDOM RECIPE SEARCH //
//////////////////
function randomRecipe() {
    console.log("firing");

    //on search, search for recipes of "searchTerm" and bring up results
    var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=8";
    
    $.ajax({
        url: queryURL,
        method: "GET",
        headers: { "X-RapidAPI-Key": "9a78976a75msh4fb280544b8746fp163b0ejsn08107d9989de" }
    })

        // .then is our Promise => it is triggered on any response
        // pass in response as a parameter to capture the data obj returned
        .then(function (response) {
            console.log(response);
            //emptying the arrays for re-use
            recipeId.length = 0;
            recipePic.length = 0;
            recipeTitle.length = 0;
            //populating the Arrays
            //it's giving us bonus results with no images I guess?
            //and weird amounts of images
            //
            for (var i = 0; i < response.recipes.length; i++) {
                recipeId.push(response.recipes[i].id);
                recipePic.push(response.recipes[i].image);
                recipeTitle.push(response.recipes[i].title);
                //these are the arrays I'm feeding the cardCreate function above
            }
            cardCreate();
        });
}