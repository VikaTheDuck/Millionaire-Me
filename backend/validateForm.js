function validateFormData(formData) {
    // Validate Age
    if (!formData.age) {
        throw new Error("Age is required. Please enter your age.");
    } else if (formData.age <= 0 || formData.age > 80) {
        throw new Error(
            "Age must be a positive number and less than 80. Can you really live that long?"
        );
    }

    // Validate Income
    if (!formData.income) {
        throw new Error(
            "Income is required. Please enter your monthly income."
        );
    } else if (formData.income < 0) {
        throw new Error(
            "Income must be a positive number. If you are unemployed, can you really invest?"
        );
    }

    return formData;
}

export default validateFormData;
