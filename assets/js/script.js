// defining variables
var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a');
var currentTime = moment().hour();

var firstHour = 8;
var lastHour = 6;
var textInput = document.getElementsByTagName('textarea');
var container = document.querySelector('.container');
var save = document.querySelector('.saveBtn');
var timeBlock = document.querySelector('.time-block');

// makes date visible on page
document.getElementById('currentDay').innerHTML = currentDate;

// add event trigger to page
save.addEventListener('click', (e) => {
    var clickedButton = $(this);
    var timeBlock2 = clickedButton.closest('.time-block');
    var closestTextArea = clickedButton.siblings('textarea');
    var timeBlockId = timeBlock2.attr("id");
    localStorage.setItem(timeBlockId, closestTextArea.value);
});

// adds logic statement to code
for (let i = 0; i<timeBlock.length; i++) {
    var colorBoxes = timeBlock[i];
//  var colorBoxes = parseInt($(this).attr("id").replace("hour", ""));
 if (colorBoxes > currentTime) {
    $(this).addClass("future");
  } else if (colorBoxes < currentTime) {
    textInput.style.background
    // $(this).addClass("past");
  } else {
    $(this).addClass("present");
  }
}

