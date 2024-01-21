import express from "express";
import calculateDebt from "./calculateDebt.js";
import calculateInvesting from "./calculateInvesting.js";
const app = express();
const port = 3003;

function validateFormData(formData) {
    const errors = {};
    // Validate Age
    if (!formData.age) {
        errors.age = "Age is required";
    } else if (formData.age <= 0 || formData.age > 120) {
        errors.age = "Age must be a positive number and less than 120";
    }

    // Validate Income
    if (!formData.income) {
        errors.income = "Income is required";
    } else if (formData.income < 0) {
        errors.income = "Income must be a positive number";
    }

    if (Object.keys(errors).length > 0) {
        throw errors;
    }

    return formData;
}

function calculateDebtToIncomeRatio(debt, income) {
    return income - debt;
}

function isDebtHigh(debt, income) {
    return income - debt;
}

app.get("/", (req, res) => {
    console.log(calculateInvesting);
    res.json(calculateDebt());
});

app.post("/calculate", (req, res) => {
    const data = req.body;
    try {
        validateFormData(data);
    } catch (error) {
        return res.status(400).json(error);
    }

    let result = 100; // Replace this with your calculation

    const debtToIncomeRatio = calculateDebtToIncomeRatio(
        data.debt,
        data.income
    );
    const highDebt = isDebtHigh(debtToIncomeRatio, data.income);
    if (highDebt) {
        // Send back a response
        res.json({ message: "Calculations complete", result: result });
    }
});

app.post("/success", (req, res) => {
    res.json({
        success: true,
        message: "Valid data",
        data: { age: 50 },
    });
});

app.post("/error", (req, res) => {
    res.json({
        success: false,
        message: "Invalid data",
        data: { age: -1 },
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
