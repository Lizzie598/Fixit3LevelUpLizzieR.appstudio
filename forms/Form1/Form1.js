function carLoan(loanTotal, timePeriod, interestRate) {
  let interestPerMonth = interestRate/12
  let interestTime = math.pow((interestPerMonth + 1), timePeriod)
  let monthlyPayment = loanTotal*((interestPerMonth*interestTime)/(interestTime - 1))
  return monthlyPayment
}

/*
//main program
let calculator = prompt("Which calculator would you like to use?")
*/

//main program
let loanTotal = prompt("How much is your loan?")
let timePeriod = prompt("How many months is your loan for?")
let interestRate = prompt("What is your interest rate? (decimal form only)")
let myCarLoan = carLoan(loanTotal, timePeriod, interestRate)
alert(`A car loan for ${loanTotal} over ${timePeriod} months at ${interestRate} interest would have a monthly payment of ${monthlyPayment}`)