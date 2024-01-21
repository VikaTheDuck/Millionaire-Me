/**
 * Calculates the disposable income based on the given income and spending.
 * @param {number} income - The total income.
 * @param {number} spending - The total spending.
 * @returns {number} The disposable income.
 */
const calculateDisposableIncome = (income, spending) => {
    const disposableIncome = income - spending;
    return disposableIncome < 0 ? 0 : disposableIncome;
};

export default calculateDisposableIncome;
