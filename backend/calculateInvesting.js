// For ETF it does not take into account MER and yield, but this is minimal in the long run anyway
function calculateInvesting(
    monthlyInvestment,
    annualInterestRate,
    inflationRate,
    targetAmount
) {
    let savings = 0;
    let months = 0;
    const maxAge = 70 * 12;

    while (savings < targetAmount) {
        savings += monthlyInvestment;
        savings *= 1 + annualInterestRate / 12;
        savings /= 1 + inflationRate / 12;
        months += 1;
        // If the number of months is larger than the max age then it will throw an error.
        if (months > maxAge) {
            throw new Error(
                "The average life expectency is 80. If you are at 70 and don't have a" +
                    " budget then please be okay with not being a millionaire."
            );
        }
    }
    return Math.round(months / 12);
}

console.log(calculateInvesting(1000,0.07,0.02,1000000));
export default calculateInvesting;
