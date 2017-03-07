/**
 * Created by ben on 25/02/2017.
 */

console.log("Item view working");
$(".card").click(function(){
   console.log("Card clicked");
   console.log(this);
   $("#overlay").show();
   $("body").css('overflow','hidden');
});