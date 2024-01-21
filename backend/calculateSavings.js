function calculateSavings(disposableIncome, monthlyExpense) {
    let savings = 0;
    let months = 0;
    const targetMultiplier = 6;
    const maxAge = 70 * 12;
    // Loop to check if the person has enough savings.
    while (savings < targetMultiplier * monthlyExpense) {
        savings += disposableIncome;
        months += 1;
        console.log(months);
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

console.log(calculateSavings(2000, 7000));

export default calculateSavings;
