//get the current date and time
var today = new Date();
//get date of the week(0-6,0: sunday, 6: saturday)
var day = today.getDay();
//array of day names
var daylist = ['Chủ Nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
//display the current day
console.log('Hôm nay là:' + daylist[day] + '.');

// Get the current hour, minute, and second
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
// Determine if it's AM or PM
var prepand = hour >= 12 ? 'PM' : 'AM';
// Convert 24-hour format to 12-hour format
hour = hour >= 12 ? hour - 12 : hour;
// Check for special cases when hour is 0
if (hour === 0 && prepand === 'PM') {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = 'noon';
  } else {
    hour = 12;
    prepand = 'PM';
  }
}
// Check for special cases when hour is 0
if (hour === 0 && prepand === 'AM') {
  if (minute === 0 && minute === 0) {
    hour = 12;
    prepand = 'midnight';
  } else {
    hour = 12;
    prepand = 'AM';
  }
}
console.log('bay gio la:' + hour + ':' + minute + ':' + second + prepand);
