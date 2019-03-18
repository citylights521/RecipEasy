document.getElementsByClassName('checklist').onclick = function() {
    // access properties using this keyword
    if ( this.checked ) {
        // if checked ...
        this.style.setProperty("text-decoration", "line-through")}};
        
$("#button-to-map").on("click", function() {
            $("#recipe-pic").attr("src", "../mock-up-map.png")
        })
