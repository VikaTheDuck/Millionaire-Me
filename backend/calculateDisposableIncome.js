/**
 * Calculates the disposable income based on the given income and spending.
 * @param {number} income - The total income.
 * @param {number} spending - The total spending.
 * @returns {number} The disposable income.
 */
const calculateDisposableIncome = (income, spending) => {
    if (income <= spending) {
        throw new Error(
            "Income must be greater than spending. If you are actually spending more than you earn, please set a budget."
        );
    }
    return income - spending;
};

export default calculateDisposableIncome;
