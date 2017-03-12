/**
 * Created by ben on 25/02/2017.
 */

$(".card-close-btn").click(function(){
   $(".card-overlay").animate({
      'marginTop' : "100vh"
   });
   $("#overlay").hide();
   $("body").css('overflow','visible');
});

var cards = $(".card");

var title;
var text;
var imgSrc;
var img;
var imgSm;
var imgMd;
var imgL;
var imgXl;
var git;
var livesite;
for (var i = 0; i < cards.length; i++) {
   //console.log(cards.eq(i).children(".meta").eq(0).data("title"));
   cards.eq(i).click(function() {
      title = $(this).children(".meta").data("title");
      text = $(this).children(".meta").data("text");
      img = $(this).children(".meta").data("img");
      imgSm = $(this).children(".meta").data("img-sm");
      imgMd = $(this).children(".meta").data("img-md");
      imgL = $(this).children(".meta").data("img-l");
      imgXl = $(this).children(".meta").data("img-xl");
      git = $(this).children(".meta").data("git");
      livesite = $(this).children(".meta").data("live");

      imgSrc = "<img src=\"" + img + "-800px.jpg\" ";
      imgSrc += "srcset=\"";
      imgSrc += img + "-400px.jpg 400w, ";
      imgSrc += img + "-600px.jpg 600w, ";
      imgSrc += img + "-800px.jpg 800w, ";
      imgSrc += img + "-1000px.jpg 1000w\" ";
      imgSrc += "alt=\"" + title + "\"";
      imgSrc += "class=\"project-image\">";

      $("#overlay-card-title").html("<h2>" + title + "</h2>");
      $("#overlay-card-text").html(text);
      $("#overlay-card-img").html(imgSrc);
      console.log($("#overlay-card-github").attr("href", git));
      console.log($("#overlay-card-live").attr("href", livesite));

      $("#overlay").show();
      $(".card-overlay").animate({
         'marginTop' : "0"
      });
      $("body").css('overflow', 'hidden');
   });
}