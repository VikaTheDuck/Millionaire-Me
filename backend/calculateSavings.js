function calculateSavings(monthlyInvestment, monthlyExpense) {
    let savings = 0;
    let months = 0;
    while (savings < (6 * monthlyExpense)) {
        savings += monthlyInvestments;
        months += 1;
    }
    if (months > 6) {
        // Convert months to years as an integer
        const years = Math.floor(months / 12);
        return years;
    } else {
        return 0;
    }
}

export default calculateSavings;