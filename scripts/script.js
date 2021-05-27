//Final CSS Animation Project HTTP 5104

$('#ok').click(function(){
document.getElementById("instructions").style.display = "none";
  $('#spaceship').css("margin-bottom", "20em");  
  $('#spaceship').css("margin-left", "25em");  
  document.getElementById("flyaway").style.display = "block";
  document.getElementById("land").style.display = "block";
  document.getElementById("suck").style.display = "block";
});

//Funtion to fly away
$('#flyaway').click(function(){
  $('#spaceship').css("margin-bottom", "65em");  
  $('#spaceship').css("margin-left", "75em");  
 // $('#spaceship').css("transform", "scale(0.4)");
  document.getElementById("rays").style.display = "none";
  document.getElementById("flyaway").style.display = "none";
  document.getElementById("suck").style.display = "none";
  document.getElementById("land").style.display = "block";
  document.getElementById("flyup").style.display = "block";
  document.getElementById("drop").style.display = "none";
});

//Function to fly up
$('#flyup').click(function(){
  $('#spaceship').css("margin-bottom", "20em");  
  $('#spaceship').css("margin-left", "25em");  
  $('#spaceship').css("transform", "scale(0.9)");
  document.getElementById("rays").style.display = "none";
  document.getElementById("flyup").style.display = "none";
  document.getElementById("suck").style.display = "block";
  document.getElementById("drop").style.display = "block";
  document.getElementById("flyaway").style.display = "block";
  document.getElementById("land").style.display = "block";
});

//Function to land
$('#land').click(function(){
     $('#spaceship').css("margin-bottom", "1.25em");
     $('#spaceship').css("transform", "scale(1)");     
    $('#spaceship').css("margin-left", "23em");  
    document.getElementById("rays").style.display = "none";
    document.getElementById("suck").style.display = "none";
    document.getElementById("drop").style.display = "none";
    document.getElementById("flyup").style.display = "block";
  document.getElementById("land").style.display = "none";
  document.getElementById("flyaway").style.display = "block";
});

//Function to lift up
$('#suck').click(function(){
  document.getElementById("rays").style.display = "block";
     $('.simpson').css("margin-bottom", "23em");
     $('.simpson').css("margin-left", "30em");
     $('.simpson').css("transform", "scale(0)");
     document.getElementById("drop").style.display = "block";
     document.getElementById("suck").style.display = "none";
});

//Function to Drop down
$('#drop').click(function(){  
  document.getElementById("rays").style.display = "block";
     $('.simpson').css("margin-bottom", "4em");
     $('.simpson').css("margin-left", "39em");
     $('.simpson').css("transform", "scale(1)");  
     document.getElementById("suck").style.display = "block";
     document.getElementById("drop").style.display = "none";
});


if (screen.width < 936) {

//Function to Drop down
$('#drop').click(function(){  
  document.getElementById("rays").style.display = "block";
     $('.simpson').css("margin-bottom", "3.7em");
     $('.simpson').css("margin-left", "39em");
     $('.simpson').css("transform", "scale(1)");  
     document.getElementById("suck").style.display = "block";
     document.getElementById("drop").style.display = "none";
});

//Function to land
$('#land').click(function(){
     $('#spaceship').css("margin-bottom", "2.25em");
     $('#spaceship').css("transform", "scale(1)");     
    $('#spaceship').css("margin-left", "23em");  
    document.getElementById("rays").style.display = "none";
    document.getElementById("suck").style.display = "none";
    document.getElementById("drop").style.display = "none";
    document.getElementById("flyup").style.display = "block";
  document.getElementById("land").style.display = "none";
  document.getElementById("flyaway").style.display = "block";
});

}

if (screen.width < 851) {
  $('#ok').click(function(){
document.getElementById("instructions").style.display = "none";
  $('#spaceship').css("margin-bottom", "20em");  
  $('#spaceship').css("margin-left", "17em");  
  document.getElementById("flyaway").style.display = "block";
  document.getElementById("land").style.display = "block";
  document.getElementById("suck").style.display = "block";
});

  //Function to fly up
$('#flyup').click(function(){
  $('#spaceship').css("margin-bottom", "20em");  
  $('#spaceship').css("margin-left", "17em");  
  $('#spaceship').css("transform", "scale(0.9)");
  document.getElementById("rays").style.display = "none";
  document.getElementById("flyup").style.display = "none";
  document.getElementById("suck").style.display = "block";
  document.getElementById("drop").style.display = "block";
  document.getElementById("flyaway").style.display = "block";
  document.getElementById("land").style.display = "block";
});

//Function to land
$('#land').click(function(){
     $('#spaceship').css("margin-bottom", "2.25em");
     $('#spaceship').css("transform", "scale(1)");     
    $('#spaceship').css("margin-left", "15em");  
    document.getElementById("rays").style.display = "none";
    document.getElementById("suck").style.display = "none";
    document.getElementById("drop").style.display = "none";
    document.getElementById("flyup").style.display = "block";
  document.getElementById("land").style.display = "none";
  document.getElementById("flyaway").style.display = "block";
});

//Function to lift up
$('#suck').click(function(){
  document.getElementById("rays").style.display = "block";
     $('.simpson').css("margin-bottom", "23em");
     $('.simpson').css("margin-left", "22em");
     $('.simpson').css("transform", "scale(0)");
     document.getElementById("drop").style.display = "block";
     document.getElementById("suck").style.display = "none";
});

//Function to Drop down
$('#drop').click(function(){  
  document.getElementById("rays").style.display = "block";
     $('.simpson').css("margin-bottom", "3.7em");
     $('.simpson').css("margin-left", "31em");
     $('.simpson').css("transform", "scale(1)");  
     document.getElementById("suck").style.display = "block";
     document.getElementById("drop").style.display = "none";
});
}

if (screen.width < 936) {

//Function to Drop down
$('#drop').click(function(){  
  document.getElementById("rays").style.display = "block";
     $('.simpson').css("margin-bottom", "2.5em");
     $('.simpson').css("margin-left", "39em");
     $('.simpson').css("transform", "scale(1)");  
     document.getElementById("suck").style.display = "block";
     document.getElementById("drop").style.display = "none";
});

//Function to land
$('#land').click(function(){
     $('#spaceship').css("margin-bottom", "1.25em");
     $('#spaceship').css("transform", "scale(1)");     
    $('#spaceship').css("margin-left", "23em");  
    document.getElementById("rays").style.display = "none";
    document.getElementById("suck").style.display = "none";
    document.getElementById("drop").style.display = "none";
    document.getElementById("flyup").style.display = "block";
  document.getElementById("land").style.display = "none";
  document.getElementById("flyaway").style.display = "block";
});

}

if (screen.width < 791) {
  $('#ok').click(function(){
document.getElementById("instructions").style.display = "none";
  $('#spaceship').css("margin-bottom", "20em");  
  $('#spaceship').css("margin-left", "11em");  
  document.getElementById("flyaway").style.display = "block";
  document.getElementById("land").style.display = "block";
  document.getElementById("suck").style.display = "block";
});

  //Function to fly up
$('#flyup').click(function(){
  $('#spaceship').css("margin-bottom", "20em");  
  $('#spaceship').css("margin-left", "11em");  
  $('#spaceship').css("transform", "scale(0.9)");
  document.getElementById("rays").style.display = "none";
  document.getElementById("flyup").style.display = "none";
  document.getElementById("suck").style.display = "block";
  document.getElementById("drop").style.display = "block";
  document.getElementById("flyaway").style.display = "block";
  document.getElementById("land").style.display = "block";
});

//Function to land
$('#land').click(function(){
     $('#spaceship').css("margin-bottom", "1.25em");
     $('#spaceship').css("transform", "scale(1)");     
    $('#spaceship').css("margin-left", "9em");  
    document.getElementById("rays").style.display = "none";
    document.getElementById("suck").style.display = "none";
    document.getElementById("drop").style.display = "none";
    document.getElementById("flyup").style.display = "block";
  document.getElementById("land").style.display = "none";
  document.getElementById("flyaway").style.display = "block";
});

//Function to lift up
$('#suck').click(function(){
  document.getElementById("rays").style.display = "block";
     $('.simpson').css("margin-bottom", "23em");
     $('.simpson').css("margin-left", "16em");
     $('.simpson').css("transform", "scale(0)");
     document.getElementById("drop").style.display = "block";
     document.getElementById("suck").style.display = "none";
});

//Function to Drop down
$('#drop').click(function(){  
  document.getElementById("rays").style.display = "block";
     $('.simpson').css("margin-bottom", "4em");
     $('.simpson').css("margin-left", "25em");
     $('.simpson').css("transform", "scale(1)");  
     document.getElementById("suck").style.display = "block";
     document.getElementById("drop").style.display = "none";
});
}

if (screen.width < 551) {
  $('#ok').click(function(){
document.getElementById("instructions").style.display = "none";
  $('#spaceship').css("margin-bottom", "20em");  
  $('#spaceship').css("margin-left", "7em");  
  document.getElementById("flyaway").style.display = "block";
  document.getElementById("land").style.display = "block";
  document.getElementById("suck").style.display = "block";
});

  //Function to fly up
$('#flyup').click(function(){
  $('#spaceship').css("margin-bottom", "20em");  
  $('#spaceship').css("margin-left", "7em");  
  $('#spaceship').css("transform", "scale(0.9)");
  document.getElementById("rays").style.display = "none";
  document.getElementById("flyup").style.display = "none";
  document.getElementById("suck").style.display = "block";
  document.getElementById("drop").style.display = "block";
  document.getElementById("flyaway").style.display = "block";
  document.getElementById("land").style.display = "block";
});

//Function to land
$('#land').click(function(){
     $('#spaceship').css("margin-bottom", "1.25em");
     $('#spaceship').css("transform", "scale(1)");     
    $('#spaceship').css("margin-left", "6em");  
    document.getElementById("rays").style.display = "none";
    document.getElementById("suck").style.display = "none";
    document.getElementById("drop").style.display = "none";
    document.getElementById("flyup").style.display = "block";
  document.getElementById("land").style.display = "none";
  document.getElementById("flyaway").style.display = "block";
});

//Function to lift up
$('#suck').click(function(){
  document.getElementById("rays").style.display = "block";
     $('.simpson').css("margin-bottom", "23em");
     $('.simpson').css("margin-left", "12em");
     $('.simpson').css("transform", "scale(0)");
     document.getElementById("drop").style.display = "block";
     document.getElementById("suck").style.display = "none";
});

//Function to Drop down
$('#drop').click(function(){  
  document.getElementById("rays").style.display = "block";
     $('.simpson').css("margin-bottom", "4em");
     $('.simpson').css("margin-left", "21em");
     $('.simpson').css("transform", "scale(1)");  
     document.getElementById("suck").style.display = "block";
     document.getElementById("drop").style.display = "none";
});
}

if (screen.width < 481) {
  $('#ok').click(function(){
document.getElementById("instructions").style.display = "none";
  $('#spaceship').css("margin-bottom", "20em");  
  $('#spaceship').css("margin-left", "4em");  
  document.getElementById("flyaway").style.display = "block";
  document.getElementById("land").style.display = "block";
  document.getElementById("suck").style.display = "block";
});

  //Function to fly up
$('#flyup').click(function(){
  $('#spaceship').css("margin-bottom", "20em");  
  $('#spaceship').css("margin-left", "4em");  
  $('#spaceship').css("transform", "scale(0.9)");
  document.getElementById("rays").style.display = "none";
  document.getElementById("flyup").style.display = "none";
  document.getElementById("suck").style.display = "block";
  document.getElementById("drop").style.display = "block";
  document.getElementById("flyaway").style.display = "block";
  document.getElementById("land").style.display = "block";
});

//Function to land
$('#land').click(function(){
     $('#spaceship').css("margin-bottom", "1.25em");
     $('#spaceship').css("transform", "scale(1)");     
    $('#spaceship').css("margin-left", "3em");  
    document.getElementById("rays").style.display = "none";
    document.getElementById("suck").style.display = "none";
    document.getElementById("drop").style.display = "none";
    document.getElementById("flyup").style.display = "block";
  document.getElementById("land").style.display = "none";
  document.getElementById("flyaway").style.display = "block";
});

//Function to lift up
$('#suck').click(function(){
  document.getElementById("rays").style.display = "block";
     $('.simpson').css("margin-bottom", "23em");
     $('.simpson').css("margin-left", "9em");
     $('.simpson').css("transform", "scale(0)");
     document.getElementById("drop").style.display = "block";
     document.getElementById("suck").style.display = "none";
});

//Function to Drop down
$('#drop').click(function(){  
  document.getElementById("rays").style.display = "block";
     $('.simpson').css("margin-bottom", "4em");
     $('.simpson').css("margin-left", "18em");
     $('.simpson').css("transform", "scale(1)");  
     document.getElementById("suck").style.display = "block";
     document.getElementById("drop").style.display = "none";
});
}

if (screen.width < 421) {
  $('#ok').click(function(){
document.getElementById("instructions").style.display = "none";
  $('#spaceship').css("margin-bottom", "20em");  
  $('#spaceship').css("margin-left", "1em");  
  document.getElementById("flyaway").style.display = "block";
  document.getElementById("land").style.display = "block";
  document.getElementById("suck").style.display = "block";
});

  //Function to fly up
$('#flyup').click(function(){
  $('#spaceship').css("margin-bottom", "20em");  
  $('#spaceship').css("margin-left", "1em");  
  $('#spaceship').css("transform", "scale(0.9)");
  document.getElementById("rays").style.display = "none";
  document.getElementById("flyup").style.display = "none";
  document.getElementById("suck").style.display = "block";
  document.getElementById("drop").style.display = "block";
  document.getElementById("flyaway").style.display = "block";
  document.getElementById("land").style.display = "block";
});

//Function to land
$('#land').click(function(){
     $('#spaceship').css("margin-bottom", "1.25em");
     $('#spaceship').css("transform", "scale(1)");     
    $('#spaceship').css("margin-left", "0");  
    document.getElementById("rays").style.display = "none";
    document.getElementById("suck").style.display = "none";
    document.getElementById("drop").style.display = "none";
    document.getElementById("flyup").style.display = "block";
  document.getElementById("land").style.display = "none";
  document.getElementById("flyaway").style.display = "block";
});

//Function to lift up
$('#suck').click(function(){
  document.getElementById("rays").style.display = "block";
     $('.simpson').css("margin-bottom", "23em");
     $('.simpson').css("margin-left", "6.5em");
     $('.simpson').css("transform", "scale(0)");
     document.getElementById("drop").style.display = "block";
     document.getElementById("suck").style.display = "none";
});

//Function to Drop down
$('#drop').click(function(){  
  document.getElementById("rays").style.display = "block";
     $('.simpson').css("margin-bottom", "4em");
     $('.simpson').css("margin-left", "15em");
     $('.simpson').css("transform", "scale(1)");  
     document.getElementById("suck").style.display = "block";
     document.getElementById("drop").style.display = "none";
});
}

if (screen.width < 321) {
  $('#ok').click(function(){
document.getElementById("instructions").style.display = "none";
  $('#spaceship').css("margin-bottom", "20em");  
  $('#spaceship').css("margin-left", "-2em");  
  document.getElementById("flyaway").style.display = "block";
  document.getElementById("land").style.display = "block";
  document.getElementById("suck").style.display = "block";
});

  //Function to fly up
$('#flyup').click(function(){
  $('#spaceship').css("margin-bottom", "20em");  
  $('#spaceship').css("margin-left", "-2em");  
  $('#spaceship').css("transform", "scale(0.9)");
  document.getElementById("rays").style.display = "none";
  document.getElementById("flyup").style.display = "none";
  document.getElementById("suck").style.display = "block";
  document.getElementById("drop").style.display = "block";
  document.getElementById("flyaway").style.display = "block";
  document.getElementById("land").style.display = "block";
});

//Function to land
$('#land').click(function(){
     $('#spaceship').css("margin-bottom", "1.25em");
     $('#spaceship').css("transform", "scale(1)");     
    $('#spaceship').css("margin-left", "0");  
    document.getElementById("rays").style.display = "none";
    document.getElementById("suck").style.display = "none";
    document.getElementById("drop").style.display = "none";
    document.getElementById("flyup").style.display = "block";
  document.getElementById("land").style.display = "none";
  document.getElementById("flyaway").style.display = "block";
});

//Function to lift up
$('#suck').click(function(){
  document.getElementById("rays").style.display = "block";
     $('.simpson').css("margin-bottom", "23em");
     $('.simpson').css("margin-left", "3em");
     $('.simpson').css("transform", "scale(0)");
     document.getElementById("drop").style.display = "block";
     document.getElementById("suck").style.display = "none";
});

//Function to Drop down
$('#drop').click(function(){  
  document.getElementById("rays").style.display = "block";
     $('.simpson').css("margin-bottom", "4em");
     $('.simpson').css("margin-left", "12em");
     $('.simpson').css("transform", "scale(1)");  
     document.getElementById("suck").style.display = "block";
     document.getElementById("drop").style.display = "none";
});
}