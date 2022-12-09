let input = document.getElementById("dob");
let yearText = document.getElementById("years");
let monthsText = document.getElementById("months");
let DaysText = document.getElementById("days");

let d1, m1, y1;

input.addEventListener("input", (e) => {
  let DOB = new Date(e.target.value);
  m1 = DOB.getMonth() + 1;
  d1 = DOB.getDate();
  y1 = DOB.getFullYear();
  getAge();
  console.log(d1, m1, y1);
});

function getAge(e) {
  // calcAge(e.target.value);

  calcAge();
}

function calcAge() {
  var date = new Date();
  var d2 = date.getDate();
  var m2 = 1 + date.getMonth();
  var y2 = date.getFullYear();
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (d1 > d2) {
    d2 = d2 + month[m2 - 1];
    m2 = m2 - 1;
  }
  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }

  var ageDate = d2 - d1;
  var ageMonth = m2 - m1;
  var ageYear = y2 - y1;
  displayAge(ageYear, ageMonth, ageDate);
}

function displayAge(ageYear, ageMonth, ageDate) {
  yearText.innerText = ageYear;
  monthsText.innerText = ageMonth;
  DaysText.innerText = ageDate;
}
