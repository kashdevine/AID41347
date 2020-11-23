window.onload = function (){
    // Create a dictionary where key = name contained in url
    // and value = header string to be added.
    const paramDict = {
        "homes-for-sale-in-palm-beach": "for Homes in Palm Beach",
        "condos-for-sale-in-palm-beach": {
            "searchFor":"Palm Beach",
            "replace": "Palm Beach Condos"
        },
        "i/residential":"of All Homes"
    };

    //Create variable to hold the url
    const url = window.location.href.toString();


    //Global val for the header section text where dict.key.val will go
    //get the text node and append the key to it  using the += operation.
    let headerLocation = document.querySelector("#idx-results-header > h2").textContent


    //function that takes two params: dictionary and url variable
    //if url variable contains dict.key then check if there's a "searchFor" key or if dict.key.val is dict if so then replace search for value
    //in the header string with the replace value
    //otherwise append dict.key.val to header variable
    function addOrReplaceString (parameterdictionary,urlstring){
        var key = Object.keys(parameterdictionary);

        key.forEach(key=>{
            if(urlstring.includes(key)  && typeof parameterdictionary[key] !== "object"){
                headerLocation += parameterdictionary[key];
                return true;
            }

            else if (urlstring.includes(key) == key && typeof parameterdictionary[key] == "object") {
                headerLocation.replace(parameterdictionary[key]["searchFor"], parameterdictionary[key]["replace"]);
                return true;
            }
            else{
                return false;
            }
        });

    };

    addOrReplaceString(paramDict, url);
};

window.onload = function (){
    const headerLocation = document.querySelector("#idx-results-header > h2").textContent
    const stringRelacement = "Palm Beach Condos";
    const oldString = "Palm Beach";

    headerLocation.replace(oldString, stringRelacement);
};

window.addEventListener("DOMContentLoaded",function (){
    const headerLocation = document.querySelector("#idx-results-header > h2");
    const stringRelacement = "Palm Beach Condos";
    const oldString = "Palm Beach";

    /**
     * Note that textContent.replace returns a string, so it needs to be set to the textContent node.
     */
    headerLocation.textContent = headerLocation.textContent.replace(oldString, stringRelacement);
});

window.addEventListener("load",function (){
    const headerLocation = document.querySelector("#idx-results-header > h2").textContent;
    const stringRelacement = "Palm Beach Condos";
    const oldString = "Palm Beach";

    headerLocation.replace(oldString, stringRelacement);
});

window.addEventListener("load",function (){
    var headerLocation = document.querySelector("#idx-results-header > h2").textContent;
    var stringRelacement = "for Homes in Palm Beach";

    headerLocation += stringRelacement;
});

window.addEventListener("load",function (){
    const headerLocation = document.querySelector("#idx-results-header > h2").textContent;
    const stringRelacement = "of All Homes";

    headerLocation += stringRelacement;
});

idx("#idx-results-header > h2").text(function () {
    return idx(this).text().replace("Palm Beach Condos", "Palm Beach"); 
});







// The following is for a different request for the client.
window.addEventListener("load",function (){
let photos = document.querySelectorAll(".idx-listing__photo");
photos.forEach(e =>{
    e.setAttribute("display", "none");
});
});


idx( document ).ready(function() {
    if(location.href.includes("/178135/stephen-ploof/soldPending")){
        idx(".idx-listing__photo").css('display', 'none');
        idx(".idx-listings").css('grid-template-columns', '1fr');
        idx(".idx-listings").css('justify-items', 'center');
        idx(".idx-page__results.idx-page__results--no-map'").css('.idx-page__results.idx-page__results--no-map', 
        '[row1-start] "courtesy" max-content [row1-end] [row2-start] "photo" 0px [row2-end] [row3-start] "status" max-content [row3-end] [row4-start] "price" max-content [row4-end] [row5-start] "address" max-content[row5-end] [row6-start] "features" 1fr [row6-end]');
    }
});
