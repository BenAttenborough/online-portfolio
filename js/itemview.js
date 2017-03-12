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
var git;
var livesite;
for (var i = 0; i < cards.length; i++) {
   //console.log(cards.eq(i).children(".meta").eq(0).data("title"));
   cards.eq(i).click(function() {
      title = $(this).children(".meta").data("title");
      text = $(this).children(".meta").data("text");
      img = $(this).children(".meta").data("img");
      git = $(this).children(".meta").data("git");
      livesite = $(this).children(".meta").data("live");

      var srcSet = createSrcSet(img, title);

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
      $("#overlay-card-img").html(srcSet);
      console.log($("#overlay-card-github").attr("href", git));
      console.log($("#overlay-card-live").attr("href", livesite));

      $("#overlay").show();
      $(".card-overlay").animate({
         'marginTop' : "0"
      });
      $("body").css('overflow', 'hidden');
   });
}

$(".thumb").click(function(){
   var src = $(this).children("img").attr("src");
   var srcImg = src.substring(0, src.length - 10);
   var alt = $(this).children("img").attr("alt");
   var srcSet = createSrcSet(srcImg, alt);
   $("#overlay-card-img").html(srcSet);
});

function createSrcSet(imgPath, alt){
   var imgSrc;
   imgSrc = "<img src=\"" + imgPath + "-800px.jpg\" ";
   imgSrc += "srcset=\"";
   imgSrc += imgPath + "-400px.jpg 400w, ";
   imgSrc += imgPath + "-600px.jpg 600w, ";
   imgSrc += imgPath + "-800px.jpg 800w, ";
   imgSrc += imgPath + "-1000px.jpg 1000w\" ";
   imgSrc += "alt=\"" + alt + "\" ";
   imgSrc += "class=\"project-image\">";
   return imgSrc;
}