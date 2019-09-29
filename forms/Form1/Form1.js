function carLoan(loanTotal, timePeriod, interestRate) {
  let interestPerMonth = interestRate/12
  let interestTime = math.pow((interestPerMonth + 1), timePeriod)
  let monthlyPayment = loanTotal*((interestPerMonth*interestTime)/(interestTime - 1))
  return monthlyPayment
}