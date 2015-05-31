$(document).ready(function(){
$(".name").hide();
$("#search").keyup(function(){
$(".name").hide();
var val = $(this).val().toLowerCase();
$(".name").hide();
$(".name").each(function(){
var text = $(this).text().toLowerCase();

if(val.length < 2){
if(text.charAt(0).indexOf(val.charAt(0)) !=-1 && val != 0){
$(this).show();
}
}
else{
if(text.indexOf(val) !=-1 && val !==0){
$(this).show();
}
}

});
});
});
