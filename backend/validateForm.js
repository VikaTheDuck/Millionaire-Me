function validateFormData(formData) {
    // Validate Age
    if (!formData.age || formData.age <= 0 || formData.age > 80) {
        throw new Error(
            "Invalid age. Please enter a positive number less than 80. If you are older than 80, please be okay with not being a millionaire."
        );
    }

    // Validate Savings
    if (formData.savings < 0) {
        throw new Error(
            "Invalid savings. Please enter 0 or a positive number. Negative savings is considered debt."
        );
    }

    // Validate Debt
    if (formData.debt < 0) {
        throw new Error(
            "Invalid debt. Please enter a positive number. Negative debt is considered savings."
        );
    }

    // Validate Debt Interest
    if (formData.debtInterest < 0) {
        throw new Error(
            "Invalid debt interest. Please enter a positive number."
        );
    }

    // Validate Debt Time
    if (formData.debtTime < 0) {
        throw new Error("Invalid debt time. Please enter a positive number.");
    }

    // Validate Income
    if (!formData.income || formData.income < 0) {
        throw new Error(
            "Invalid income. If you are not earning any income, invest in yourself."
        );
    }

    // Validate Monthly Spend
    if (!formData.monthlySpend || formData.monthlySpend < 0) {
        throw new Error(
            "Invalid monthly spend. Please enter a positive number, you can't spend negative money."
        );
    }

    return formData;
}

export default validateFormData;
