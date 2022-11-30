let input = document.getElementById("dob");
let yearText = document.getElementById("years");
let monthsText = document.getElementById("months");
let DaysText = document.getElementById("days");
// let error;

let date = new Date();
let yesterday =
  date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate() - 1);

input.setAttribute("max", yesterday);

input.addEventListener("change", getAge);

function getAge(e) {
  calcAge(e.target.value);
}

function calcAge(DateOfBirth) {
  //   console.log(DateOfBirth);
  let dobTime = new Date(DateOfBirth);
  let today = new Date();
  let dateDiff = new Date(today - dobTime);
  //   console.log(dateDiff);
  let ageYear = dateDiff.getFullYear() - 1970;
  let ageMonth = dateDiff.getMonth();
  let ageDate = dateDiff.getDate();

  displayAge(ageYear, ageMonth, ageDate);
}

function displayAge(ageYear, ageMonth, ageDate) {
  yearText.innerText = ageYear;
  monthsText.innerText = ageMonth;
  DaysText.innerText = ageDate;
}
