// Dom elements
 var timeDisplayEl = $('#currentDay');
 var thElArray = $('th[data-time]');
 
 var currentTime = moment().format('HH');

 var saveBtnEl = $(".saveBtn");
 var taskEntry = document.querySelectorAll("#entry")

 console.log(thElArray);
// Display Time (Day Month, Year)
displayTime()
function displayTime() {
    var rightNow = moment().format('dddd, MMMM Do');
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

saveBtnEl.on('click', function (event) {
    event.preventDefault();

    var taskEntry = document.querySelectorAll("#entry")

    localStorage.setItem("entry", JSON.stringify(taskEntry));
    })
;