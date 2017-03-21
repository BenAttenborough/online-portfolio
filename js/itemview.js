/**
 * Created by ben on 25/02/2017.
 */

$(".card-close-btn").click(function () {
    $(".card-overlay").animate({
        'marginTop': "100vh"
    });
    $("#overlay-card-thumbs").empty();
    console.log("Emptying");
    console.log($("#overlay-card-thumbs"));
    $("#overlay").hide();
    $("body").css('overflow', 'visible');
});

var cards = $(".card");

var title;
var text;
var srcSet;
var img;
var git;
var livesite;
var thumbsContainer = "";
for (var i = 0; i < cards.length; i++) {
    cards.eq(i).click(i, cardClickHandler);
}

function assignThumbEvents() {
    $(".thumb").click(function () {
        console.log("Thumb clicked");
        var src = $(this).children("img").attr("src");
        var srcImg = src.substring(0, src.length - 10);
        var alt = $(this).children("img").attr("alt");
        var srcSet = createSrcSet(srcImg, alt);
        $("#overlay-card-img").html(srcSet);
    });
}

function createSrcSet(imgPath, alt) {
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

function cardClickHandler(e) {
    title = $(this).children(".meta").data("title");
    text = $(this).children(".meta").data("text");
    img = $(this).children(".meta").data("img");
    git = $(this).children(".meta").data("git");
    livesite = $(this).children(".meta").data("live");
    srcSet = createSrcSet(img, title);
    thumbsContainer = "";

    var thumbs = [];
    var that = $(this);
    for (var i = 1; i <= 4; i++) {
        var imgName = "img0" + i;
        if ($(that).children(".meta").data(imgName)) {
            thumbs.push($(that).children(".meta").data(imgName));
        }
    }

    for (var i = 0; i < thumbs.length; i++) {
        console.log("i outside closure = " + i);
        thumbsContainer += "<div class=\"thumb\">";
        thumbsContainer += "<img src='" + thumbs[i] + "-400px.jpg'>";
        thumbsContainer += "</div>";
    }

    $("#overlay-card-title").html("<h2>" + title + "</h2>");
    $("#overlay-card-text").html(text);
    $("#overlay-card-img").html(srcSet);
    $("#overlay-card-thumbs").html(thumbsContainer);
    if (git !== "#") {
        $("#overlay-card-github").attr("href", git);
    } else {
        $("#overlay-card-github").hide();
    }
    if (livesite !== "#") {
        $("#overlay-card-live").attr("href", livesite);
    } else {
        $("#overlay-card-live").hide();
    }

    $("#overlay").show();
    $(".card-overlay").animate({
        'marginTop': "0"
    });
    $("body").css('overflow', 'hidden');
    $(".thumb").unbind("click");
    assignThumbEvents();
}