// Dom elements
 var timeDisplayEl = $('#currentDay');
 var thElArray = $('th[data-time]');
 
 var currentTime = moment().format('HH');

 console.log(thElArray);
// Display Time (Day Month, Year)
displayTime()
function displayTime() {
    var rightNow = moment().format('dddd, MMMM do');
    timeDisplayEl.text(rightNow);
  }

// Change color of column to indicate past, present, future


$('th').each(function(){
    var card = $(this).attr('data-time');
if(currentTime > card){
    $(this).attr("class", "past")
}else if (currentTime == card){
    $(this).attr("class", "present")
}else if (currentTime < card) {
    $(this).attr("class", "future")
}else{
    $(this).attr("class", "past");
}
})


// if you click the "save btn" save input in that row to local storage