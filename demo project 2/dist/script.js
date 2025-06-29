var s= skrollr.init();

let page=0;



$("#btn_right").click(function(){
  page+=1; $(".img_movies_move").css("top","-"+page*300+"px");
  if(page===8){$(".img_movies_move").css("top","0px");page=0;};





if(page===1){$(".ep2").addClass("addcolor");$(".ep1").removeClass("addcolor");}
else if(page===2){$(".ep3").addClass("addcolor");$(".ep2").removeClass("addcolor");}
else if(page===3){$(".ep4").addClass("addcolor");$(".ep3").removeClass("addcolor");}
else if(page===4){$(".ep5").addClass("addcolor");$(".ep4").removeClass("addcolor");}
else if(page===5){$(".ep6").addClass("addcolor");$(".ep5").removeClass("addcolor");}
else if(page===6){$(".ep7").addClass("addcolor");$(".ep6").removeClass("addcolor");}
else if (page===7){$(".ep8").addClass("addcolor");$(".ep7").removeClass("addcolor");}
else if (page===0){$(".ep1").addClass("addcolor");$(".ep8").removeClass("addcolor");}

});

$("#btn_left").click(function(){
  if(page===0){page=7;$(".img_movies_move").css("top","-"+page*300+"px");}

  else {page=page-1; $(".img_movies_move").css("top","-"+page*300+"px");}

if(page===0){$(".ep1").addClass("addcolor");$(".ep2").removeClass("addcolor");}
else if(page===7){$(".ep8").addClass("addcolor");$(".ep1").removeClass("addcolor");}
else if(page===6){$(".ep7").addClass("addcolor");$(".ep8").removeClass("addcolor");}
else if(page===5){$(".ep6").addClass("addcolor");$(".ep7").removeClass("addcolor");}
else if(page===4){$(".ep5").addClass("addcolor");$(".ep6").removeClass("addcolor");}
else if(page===3){$(".ep4").addClass("addcolor");$(".ep5").removeClass("addcolor");}
else if(page===2){$(".ep3").addClass("addcolor");$(".ep4").removeClass("addcolor");}
else if (page===1){$(".ep2").addClass("addcolor");$(".ep3").removeClass("addcolor");}

             
});