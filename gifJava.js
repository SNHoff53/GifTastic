// Variables declared in an array
var topics = [
    "fashion",
    "shoes",
    "pokemon",
    "cats"
];

function topicsDisplay(){
    $("#gifs-view").empty();
// Declaring variable of topics 
    topics = $(this).attr("data-name");  
};

$("#buttons-area").on("click", function(){

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=fAd8nhiRNR2VtraFeMkS7t2FaNyqITEc&limit=10";

    // Ajax called and method is used to  GET info
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        console.log(queryURL);
        console.log(response);

        // Saving the response from API call to gifResults variable
        var gifResults = response.data;
        console.log(gifResults);

        // looping/counting the gifResult items
        for (var i = 0; i < gifResults.length; i++) {
                // Creating a new div
                var gifDiv = $("<div>");
                var p = $("<p>").text("Rating: " + gifResults[i].rating);
                console.log("for loop");

                var gifURL = gifResults[i].images.fixed_height.url;
                var topicsImage = $("<img>");

                // Animation - start/stop gif
                
                topicsImage.attr("src", gifURL);
                // topicsImage.attr("data-still", gifResults[i].images.fixed_height_still.url);
                // topicsImage.attr("data-animate", gifResults[i].images.fixed_height.url);
                // topicsImage.attr("data-state", still);
                // topicsImage.addClass("animate-gif");

                gifDiv.append(p);
                gifDiv.append(topicsImage);
                
                $("#gifs-view").prepend(gifDiv);

        }
    });
});

// Rendering new buttons
function newButtonRendered(){
    // Deleting gifs prior to adding new gifs -- do not want repeat buttons
    $("#buttons-area").empty();

    // Loops through topics
    for (var i = 0; i < topics.length; i++){
        // Creating a new button holder
        var a = $("<button>");
        // We are adding the class Topic to our new button
        a.addClass("topic-btn btn btn-outline-info");
        // Class for attribute
        a.attr("data-name", topics[i]);
        // Text for the new button
        a.text(topics[i]);
        // Appending/adding the new button to the button div
        $("#buttons-area").append(a);
    }
}
// A topic button has been clicked
$("#add-gif").on("click", function(event){
    event.preventDefault();

    var topic = $("#gif-input").val() || '';
    topics.push(topic);
    
    newButtonRendered();
});

$(document).on("click", ".topic", newButtonRendered);

newButtonRendered();