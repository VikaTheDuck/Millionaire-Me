function calculateInvesting(monthlyInvestment, annualInterestRate, inflationRate, targetAmount) {
    let investments = 0;
    let months = 0;

    // Loop to check the number of months it will take to reach the target amount.
    while (investments < targetAmount) {
        investments += monthlyInvestment;
        investments *= (1 + annualInterestRate / 12);
        investments /= (1 + inflationRate / 12);
        months += 1;
    }


    if (months > 6) {
        // Convert months to years as an integer
        const years = Math.round(months / 12);
        return years;
}

export default calculateInvesting;
