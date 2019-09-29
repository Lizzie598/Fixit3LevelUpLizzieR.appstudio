function carLoan(loanTotal, timePeriod, interestRate) {
  let interestPerMonth = Number(interestRate/12)
  let interestTime = Number((interestPerMonth + 1)**timePeriod)
  let monthlyPayment = loanTotal*((interestPerMonth*interestTime)/(interestTime - 1))
  return monthlyPayment
}

function homeLoan(loanAmount, timeLength, interestRateH) {
  let interestRatePerMonth = Number(interestRateH/12)
  let interestTimeLength = Number((interestRatePerMonth + 1)**timeLength)
  let monthlyPaymentHouse = loanTotal*((interestPerMonth*interestTimeLength)/(interestTimeLength - 1))
  return monthlyPaymentHouse
}

let calculator = prompt("Which calculator would you like to use?")

if (calculator = "car loan") {

//main program for car loan
let loanTotal = prompt("How much is your loan?")
let timePeriod = prompt("How many months is your loan for?")
let interestRate = prompt("What is your interest rate? (decimal form only)")
let myCarLoan = carLoan(loanTotal, timePeriod, interestRate)
alert(`A car loan for ${loanTotal} over ${timePeriod} months at ${interestRate} interest would have a monthly payment of ${myCarLoan}`)

var i = 0;
do {
  myCarLoan = carLoan(loanTotal, timePeriod, interestRate);
  alert(`A car loan for ${loanTotal} over ${timePeriod} months at ${interestRate} interest would have a monthly payment of ${myCarLoan}`);
}
  while(myCarLoan[i] !== 0);
    
} else {
  
//main program for house loan
let loanAmount = prompt("How much is your loan?")
let timeLength = prompt("How many months is your loan for? (in months, NOT years)")
let interestRateH = prompt("What is your interest rate? (decimal form only)")
let myHouseLoan = homeLoan(loanAmount, timeLength, interestRateH)
alert(`A home loan for ${loanAmount} over ${timeLength} months at ${interestRateH} interest would have a monthly payment of ${myHouseLoan}`)

var i = 0;
do {
  myHouseLoan = homeLoan(loanAmount, timeLength, interestRateH);
  alert(`A home loan for ${loanAmount} over ${timeLength} months at ${interestRateH} interest would have a monthly payment of ${myHouseLoan}`);
}
  while(myHouseLoan[i] !== 0);
}