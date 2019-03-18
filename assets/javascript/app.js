// JavaScript
$(window).on("load", function() {
console.log("loaded");

})







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