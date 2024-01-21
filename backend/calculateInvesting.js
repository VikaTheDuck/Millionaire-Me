function calculateInvesting(monthlyInvestment, annualInterestRate, inflationRate) {
    let investments = 0;
    let months = 0;

    while (investments < 1000000) {
        investments += monthlyInvestment;
        investments *= (1 + annualInterestRate / 12);
        investments /= (1 + inflationRate / 12);
        months += 1;
    }

    const years = months / 12;
    return years;
}

export default calculateInvesting;
