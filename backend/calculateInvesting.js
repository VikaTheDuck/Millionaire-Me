// For ETF it does not take into account MER and yield, but this is minimal in the long run anyway
function calculateInvesting(
    monthlyInvestment,
    annualInterestRate,
    inflationRate,
    targetAmount
) {
    let savings = 0;
    let months = 0;

    while (savings < targetAmount) {
        savings += monthlyInvestment;
        savings *= 1 + annualInterestRate / 12;
        savings /= 1 + inflationRate / 12;
        months += 1;
    }
    return Math.round(months / 12);
}

export default calculateInvesting;
