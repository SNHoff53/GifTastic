// Variables declared in an array
var topics = [
    "runway-fashion",
    "shoes",
    "pokemon",
    "cats"
];


function topicsDisplay(){
    $("#buttons-area").empty();
// Declaring variable of topics 
    topics = $(this).attr("data-name");
// constructing a URL to search Gify for a random gif when button is clicked

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=fAd8nhiRNR2VtraFeMkS7t2FaNyqITEc&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(queryURL);

        console.log(response);

        var gifResults = response.data;

        // looping/counting the gifResult items
        for (var i = 0; i < gifResults.length; i++) {
                
                var gifDiv = $("<div>");
                var p = $("<p>").text("Rating: " + gifResults[i].rating);
                var topicsImage = $("<img>");
                topicsImage.attr("src", gifResults[i].images.fixed_height.url);

                // animation goes here
                gifDiv.append(p);
                gifDiv.append(topicsImage);
                
                $("#gifs-here").prepend(gifDiv);

        }
    });

};

// Render new buttons
function newButton(){
    $("#buttons-area").empty();

    // Loops through topics
    for (var i = 0; i < topics.length; i++){
        var a = $("<button>");
        // We are adding the class Topic to our new button
        a.addClass("topic-btn");
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

    var topic = $("#gif-input").val();
    topics.push(topic);
    
    newButton();
});

$(document).on("click", ".topic", newButton);

newButton();