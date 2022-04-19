// Dom elements
 var timeDisplayEl = $('#currentDay');
 var thElArray = $('th[data-time]');
 
 var currentTime = moment().format('HH');

 var saveBtnEl = $(".saveBtn");

 var myArray = [];

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
var entries = JSON.parse(localStorage.getItem("entry")) 
    for(i=0; i< entries.length; i++) {
        $("#"+entries[i].taskhour).val(entries[i].taskDe)
    }


saveBtnEl.on('click', function (event) {
    event.preventDefault();
    var idtext = $(event.target).attr("data-id");
    console.log(event.target);

    var task ={
        taskhour: idtext,
        taskDe: $("#"+idtext).val()
    }
    myArray.push(task)

    localStorage.setItem("entry", JSON.stringify(myArray));
    })
;
