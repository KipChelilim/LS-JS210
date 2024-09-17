// 1
let today = new Date();
// console.log(today);

// 2
// console.log(`Today's day is ${today.getDay()}`);

// 3
// let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// console.log(`Today's day is ${daysOfWeek[today.getDay()]}`);

// 4
// let todaysDay = daysOfWeek[today.getDay()];
// let todaysDate = today.getDate();

// console.log(`Today's date is ${todaysDay}, the ${todaysDate}`);

// 5
function dateSuffix(dateNum) {
  let dateString = dateNum.toString();
  let lastDigit = dateNum % 10;

  if (dateNum > 10 && dateNum< 14) return dateString + 'th';

  switch (lastDigit) {
    case 1:
      dateString += 'st';
      break;
    case 2:
      dateString += 'nd';
      break;
    case 3:
      dateString += 'rd';
      break;
    default:
      dateString += 'th'
  }

  return dateString;
}

// console.log(`Today's date is ${todaysDay}, the ${dateSuffix(todaysDate)}`);

// 6
// let todaysMonth = today.getMonth();
// let dayMonthDateString = `${todaysDay}, ${todaysMonth} ${dateSuffix(todaysDate)}`;
// console.log(`Today's date is ${dayMonthDate}`);

// 7
// let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// let todaysMonthString = months[todaysMonth];
// let dayMonthDate = `${todaysDay}, ${todaysMonthString} ${dateSuffix(todaysDate)}`;

// console.log(`Today's date is ${dayMonthDate}`);

// 8
function formattedMonth(monthNum) {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return months[monthNum];
}

function formattedDay(dayNum) {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return daysOfWeek[dayNum]
}

function formattedDate(date) {
  let month = formattedMonth(date.getMonth());
  let day = formattedDay(date.getDay());
  let calendarDate = dateSuffix(date.getDate());

  return `${day}, ${month} ${calendarDate}`;
}

// console.log(`Today's date is ${formattedDate(today)}`);

// 9
// console.log(today.getFullYear());
// console.log(today.getYear());

// 10
// console.log(today.getTime());

// 11
let tomorrow = new Date(today.getTime())
tomorrow.setDate(18);
// console.log(`Tomorrow's date is ${formattedDate(tomorrow)}`);

// 12
let nextWeek = new Date(today.getTime());
// console.log(today === nextWeek);

// 13
// console.log(today.toString() === nextWeek.toString());
// nextWeek.setDate(24);
// console.log(today.toString() === nextWeek.toString());

// 14
function formattedTime(date) {
  let hours = today.getHours().toString();
  let minutes = today.getMinutes().toString();

  return hours.padStart(2, '0') + ':' + minutes.padStart(2, '0');
}

console.log(formattedTime(today));