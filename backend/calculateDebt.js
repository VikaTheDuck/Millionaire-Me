/**
 * Calculates the monthly payment for a given debt based on the debt amount, debt interest rate, and debt time.
 *
 * @param {number} debt - The total amount of debt.
 * @param {number} debtInterest - The annual interest rate for the debt.
 * @param {number} debtTime - The time period in years over which the debt is to be paid off.
 * @returns {number} The monthly payment amount.
 * @throws {Error} If any of the parameters are not positive numbers or if the denominator is zero.
 */
function calculateDebt(debt, debtInterest, debtTime) {
    if (debt <= 0 || debtInterest <= 0 || debtTime <= 0) {
        throw new Error(
            "Invalid parameters. Debt, debtInterest, and debtTime must be positive numbers."
        );
    }

    const monthly = 12; // 12 months in a year for payment. Debt time assumed to be in years.
    const numerator = debt * ((debtInterest * 100) / monthly);
    const denominator =
        1 - (1 + (debtInterest * 100) / monthly) ** (-debtTime * monthly);

    if (denominator === 0) {
        throw new Error("Invalid parameters. The denominator cannot be zero.");
    }

    return Math.round(numerator / denominator);
}

export default calculateDebt;
