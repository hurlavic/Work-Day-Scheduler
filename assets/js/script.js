var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
var currentTime = moment().hour();

var firstHour = 8;
var lastHour = 6;
var textInput = document.getElementsByTagName('textarea');
var container = document.querySelector('.container');
var save = document.querySelector('.saveBtn');
var timeBlock = document.querySelector('.time-block');


document.getElementById('currentDay').innerHTML = currentDate;

save.addEventListener('click', (e) => {
    var clickedButton = $(this);
    var timeBlock2 = clickedButton.closest('.time-block');
    var closestTextArea = clickedButton.siblings('textarea');
    var timeBlockId = timeBlock2.attr("id");
    localStorage.setItem(timeBlockId, closestTextArea.value);
});


for (let i = 0; i<timeBlock.length; i++) {
    var colorBoxes = timeBlock[i];
//  var colorBoxes = parseInt($(this).attr("id").replace("hour", ""));
 if (colorBoxes > currentTime) {
    $(this).addClass("future");
  } else if (colorBoxes < currentTime) {
    $(this).addClass("past");
  } else {
    $(this).addClass("present");
  }
}

