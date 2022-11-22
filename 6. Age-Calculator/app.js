let input = document.getElementById('dob');
let yearText = document.getElementById('years');
let monthsText = document.getElementById('months');
let DaysText = document.getElementById('days');
// let error;

let date = new Date()
let yesterday = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + (date.getDate()-1)

input.setAttribute('max', yesterday)

input.addEventListener('change', getAge)


function getAge(e){
    calcAge(e.target.value)
}

function calcAge(DateOfBirth){ 
    let dobTime = new Date(DateOfBirth).getTime()
    // let today = Date.now()
    // let dateDiff = new Date(today - dobTime)
    // let ageYear = dateDiff.getFullYear()
    // let ageMonth = dateDiff.getMonth()
    // let ageDate = dateDiff.getDate()
     
    getdAge(dobTime)
    // console.log(dobTime))
    // console.log(today)
    // console.log(ageMonth)
//    if(Math.sign(ageDate) === -1) {
//     ageDate = ageDate * -1
//    }

//    if(Math.sign(ageMonth) === -1){
//     ageMonth = ageMonth * -1
//    }
    
//    displayAge(ageYear ,ageMonth, ageDate)
}

function getdAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    var d = today.getDate() - birthDate.getDate();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    displayAge(age , m , d) ;
}

function displayAge(ageYear ,ageMonth, ageDate){
    yearText.innerText = ageYear
    monthsText.innerText = ageMonth
    DaysText.innerText = ageDate

}

