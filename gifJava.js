// Variables declared in an array
var topics = [
    "runway-fashion",
    "shoes",
    "pokemon",
    "cats"
];

// Event listener for all of our button elements
$("button").on("click", function(){

// Declaring variable of topics 
topics = $(this).attr("data-topics");
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

            gifDiv.append(p);
            gifDiv.append(topicsImage);
            
            $("#gifs-here").prepend(gifDiv);

    }
});

});
