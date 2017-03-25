/**
 * Created by ben on 25/02/2017.
 */

$(".card-close-btn").click(function () {
    closeCard();
});

// Event seems to propagate
//$("#overlay").click(function (event) {
//    event.stopPropagation();
//    closeCard(event);
//});

$(document).keyup(function(e) {
    if (e.keyCode == 27) { // escape key maps to keycode `27`
        closeCard();
    }
});

function closeCard() {
    $(".card-overlay").animate({
        'marginTop': "100vh"
    });
    $("#overlay-card-thumbs").empty();
    console.log("Emptying");
    console.log($("#overlay-card-thumbs"));
    $("#overlay").hide();
    $("body").css('overflow', 'visible');
}

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
        // Explicitly set height of container so that container doesn't "bounce"
        // when next image is fetched - or if image is missing
        var mainImgHeight = $("#project-image-main").height();
        console.log("mainImgHeight: " + mainImgHeight);
        $("#overlay-card-img").height(mainImgHeight);
        $("#overlay-card-img").fadeTo( "slow", 0, function() {
            $("#overlay-card-img").html(srcSet);
        });
        $("#overlay-card-img").fadeTo( "slow" , 1);
        // make container responsive once transition complete
        $("#overlay-card-img").height("auto");

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
    imgSrc += "id=\"project-image-main\" ";
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