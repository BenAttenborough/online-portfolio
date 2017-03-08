/**
 * Created by ben on 25/02/2017.
 */

console.log("Item view working");
//$(".card").click(function(){
//   console.log("Card clicked");
//   console.log(this);
//   $("#overlay").show();
//   $("body").css('overflow','hidden');
//});

$(".card-close-btn").click(function(){
   $("#overlay").hide();
   $("body").css('overflow','visible');
});

var cards = $(".card");

var title;
var text;
var imgSm;
var imgMd;
var imgL;
var imgXl;
for (var i = 0; i < cards.length; i++) {
   //console.log(cards.eq(i).children(".meta").eq(0).data("title"));
   cards.eq(i).click(function() {
      console.log("Card clicked");
      console.log($(this).children(".meta").data("title"));
      console.log($(this).children(".meta").data("text"));
      console.log($(this).children(".meta").data("img"));
      title = $(this).children(".meta").data("title");
      text = $(this).children(".meta").data("text");
      imgSm = $(this).children(".meta").data("img-sm");
      imgMd = $(this).children(".meta").data("img-md");
      imgL = $(this).children(".meta").data("img-l");
      imgXl = $(this).children(".meta").data("img-xl");
      imgSrc = "<img src=\"img/html-video-600px.jpg\" ";
      imgSrc += "srcset=\"";
      imgSrc += imgSm + " 400w, ";
      imgSrc += imgMd + " 600w, ";
      imgSrc += imgL + " 800w, ";
      imgSrc += imgXl + " 1000w\" ";
      imgSrc += "alt=\"" + title + "\"";
      imgSrc += "class=\"project-image\">";


      $("#overlay-card-title").html("<h2>" + title + "</h2>");
      $("#overlay-card-text").html("<p>" + text + "</p>");
      $("#overlay-card-img").html(imgSrc);

      console.log(imgXl);

      $("#overlay").show();
      $("body").css('overflow', 'hidden');
   });
}