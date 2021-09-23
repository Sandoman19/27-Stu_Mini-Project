//variables to refrance index ids and classes
var searchBtn = document.querySelector("#searchBtn"); 
var formatInput = document.getElementById("formatInput");
var searchInput = document.getElementById("searchInput");
var resultsHtml = "./search-results.html";

var selectedOptions = function (event) {
  event.preventDefault();
  console.log("button");
  var search = searchInput.value; //grab the search that the client sleceted
  var format = formatInput.options[formatInput.selectedIndex].value; //retriving the value of selected format
  //if there is both a search and a category
  if (format && search) {
    //display results of search and a category in the console
    console.log("format selected: " + format);
    console.log("search input: " + search);
    //storge results of search and a category in the local storage
    localStorage.setItem("search",search)
    localStorage.setItem("format",format)
    //move to results page
    location.replace(resultsHtml);
  } else {
    return;
  }
};
//when clicked go to the next page
searchBtn.addEventListener("click", selectedOptions);

//below if a work in progress to make search show up
getSearch()

function getSearch(format, search) {
  //grab localStorage for the format and search
  var format = localStorage.getItem("format");
  var search = localStorage.getItem("search");
  //set the address for the Library of Congress
  var LoCAPI ="https://www.loc.gov/" + format + "/?q=" + search + "&fo=json";
  console.log(LoCAPI)

  //fetch(LoCAPI) below

}

// group info somehow
  //title
  //content
  //way to go into the info more???
