/**
 * Created by ben on 21/03/2017.
 */

$("#mobile-nav-links").hide();

$("#mobile-nav-button").click(function () {
    $("#mobile-nav-links").slideToggle();
    $(".hamburger-icon").toggleClass( "hide" );
    $(".hamburger-icon-close").toggleClass( "hide" );
});