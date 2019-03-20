$("#search").on("click", function(event) { //test:recipeID//as a result of load, set up a fxn for something  to happen asynchoronosly upon 'click'
event.preventDefault();

        var titleId = 'title' + sessionStorage.getItem('idOfClicked');
        var title = sessionStorage.getItem(titleId);
        $('title').html(title);
        var url = window.location.href;
        //Get the recipeId of the clicked recipe
        var searching = "kale";
        //API Request
        var recipeIngredientsApi; //= new XMLHttpRequest(); //van.js
        // .header("X-RapidAPI-Key", "9a78976a75msh4fb280544b8746fp163b0ejsn08107d9989de"
        // .end(function (result) {
        //   console.log(result.status, result.headers, result.body);
        // });
        var queryURL = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/479101/information";
        console.log(queryURL);
        $.ajax({
            url: queryURL,
            method: "GET",
            headers: { "X-RapidAPI-Key": "39fbd2f9f9msh353b67e82ca13bbp1ba75djsn5a3b5ac635d0"}
        })
        // $.ajax({ //mine w/ random'url
        //     url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ingredients=apples%2Cflour%2Csugar",
        //     method: "GET",
        //     headers: { "X-RapidAPI-Key": "9a78976a75msh4fb280544b8746fp163b0ejsn08107d9989de" }
        // })
            // .then is our Promise => it is triggered on any response
            // pass in response as a parameter to capture the data obj returned
            .then(function (response) {
                //console.log(response);
                recipeIngredientsApi = response;
                parsedIngredients(response);
                $(".chosen-recipe").text("test")
            });
       function parsedIngredients(nonParsedIngreds){
        
       console.log(nonParsedIngreds);//, response returns aspi
        //Parse what API returns
        var recipeParsed = JSON.parse(nonParsedIngreds); //had to mk a (local) inner fxn from the promis bc usage is underf
       var container = $("<div></div>")
            .attr('recipeId', 'container')//'<div recipeid="container">
            .html("<p>test</p>")
        $(".chosen-recipe").append(container);
            
        var main = $('<div></div>')
            .attr('recipeId', 'main')
            .append(container);
        //Add image to DOM
        var imgUrl = recipeParsed.image; //not in storage & already parsed;sessionStorage.getItem('imageURL' + sessionStorage.getItem('idOfClicked'));
        var img = $('<img></img>')
            .attr('recipeId', 'img')
            .attr('src', imgUrl);
        main.append(img);
    
        //Add title + recipe to DOM
        var recipeDiv = $('<div><span recipeId="title"><b>' + recipeParsed.title + '</b></span>' + recipeParsed.recipe +'</div>')
            .attr('recipeId', 'recipe')
           // .attr("<span recipeId='title'><b>" + recipeParsed.title + "</b></span>" + recipeParsed.recipe);
        main.append(recipeDiv);
    
        //Add ingredients to DOM
        var ingredients = $('<div></div>')
        	.attr('recipeId', 'ingredients')
    
    
        var clear = $('<br/>')
            .addClass('clear');
        main.append(clear);
    
        var description = $('<div></div>')
            .addClass('description');
        container.append(description)
    
    
        // CREATE INGREDIENTS SECTION
        var ingredientsTitle = $('<span></span>')
            .attr('recipeId', 'ingredientsTitle')
            .html("Ingredients");
    
        var ingredients = $('<div></div>')
            .append(ingredientsTitle)
            .addClass('ingredients');
    
        // Append all sections to DOM
        instructions.append(instructionUl);
        ingredients.append(ingredientsUl);
       }
    })       