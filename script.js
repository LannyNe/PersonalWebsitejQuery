$(document).ready(function() {
    $("#background").click(
    function(){
        $("#bgd").slideToggle();
    }),
    $("#future").click(
    function(){
        $("#ftr").fadeToggle();
    });
    $("#background").hover(
    function(){
        $(this).html("<h3>Click to collapse.</h3>");
    },
    function(){
        $(this).html("<h3>My Background</h3>");
    });
    $("#future").hover(
    function(){
        $(this).html("<h3>Click to fade.</h3>");
    },
    function(){
        $(this).html("<h3>My Future</h3>");
    })


// change background depending on user's time
var datetoday = new Date();
var thehour = datetoday.getHours();
if (thehour > 18 && thehour < 25) {
$('*').addClass('n');}
else if (thehour > 5 && thehour < 19) {
$('*').addClass('d');}
else {
$('*').addClass('n');};

// alert on image
$("#image").mouseenter(
       function(){
       alert("Me at my cousin's wedding in 2010");
    });
});