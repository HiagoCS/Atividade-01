var base
var firstTime = false;
$(document).on("click", "#btn", function(){
  base = $("#base").val();
    for(var i = 1;i<=base;i++){
      resu = i * base;
      $("#tabuada").append(i+" X "+base+" = "+resu+"<br>");
    }
});
$(document).on("change", "#base", function(){
  $("#tabuada").html("");
});