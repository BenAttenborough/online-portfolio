/**
 * Created by ben on 19/02/2017.
 */

console.log("Gallery working");

//Get all the pictures elements
var pictures = $( ".project-image" );
$( ".project-image" ).css( "border", "3px solid blue" );
console.log(pictures);
console.log(pictures[0]);
console.log(pictures.length);
//create an array with all the picture elements
var pictureArray = [];
for (var i=0; i<pictures.length; i++) {
    pictureArray.push(pictures[i]);
}
console.log(pictureArray);
console.log(pictureArray[0].sizes);

//When user clicks on picture get that picture number
$( ".project-image").click(function(){
    console.log("Picture clicked");
    console.log(this.srcset);
    $overlay.show();
});
//Show lightbox

/*
 *	---LIGHTBOX---
 */

var $overlay = $("<div id='overlay' class='clearfix'></div>");
var $previousBtn = $("<div class='col-prev clearfix'><a href='#'><img src='img/previousBtn.png' class='nav-btn'></a></div>");
var $contentDiv = $("<div class='col-main clearfix'></div>");
var $nextBtn = $("<div class='col-next clearfix'><a href='#'><img src='img/nextBtn.png' class='nav-btn'></a></div>");
var $instructions =$("<p>Use arrow keys or buttons to cycle images</p>");
var $mediaContainer = $("<div class='media-container'>");
var $caption = $("<p></p>");
var $replacementImage;
var $replacementAltText;
var fullHeight;

/*
 *	Appends an overlay to the screen, this is initial hidden in CSS
 *	@PARAM none
 *  @RETURN none
 */
function addOverlay(){
    $contentDiv.append($instructions);
    $contentDiv.append($mediaContainer);
    $contentDiv.append($caption);
    //$overlay.append($previousBtn);
    $overlay.append($contentDiv);
    //$overlay.append($nextBtn);
    $("body").prepend($overlay);
    fullHeight = $( "body" ).height();
    $overlay.height( fullHeight );
}

addOverlay();

//Display picture number in lightbox
//Display caption
//Display close button
//Make close button work
//if more than one picture show back and forward buttons
//Link back and forward buttons to going back and forth through picture array