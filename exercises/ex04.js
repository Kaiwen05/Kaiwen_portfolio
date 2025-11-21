let count = 0;
let colors= ["Orchid", "Coral", "HotPink", "Plum"];
$("#needy-button").click( function(){
  let reminder=count % colors.length;
  
$("#needy-button").html( "Clicks " + count + " " + colors[count] );
count=count+1;
});
document.body.style.backgroundColor = "pink";

