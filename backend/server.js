import express from "express";
import calculateDebt from "./calculateDebt.js";
import calculateInvesting from "./calculateInvesting.js";
import cors from "cors";
import calculateDisposableIncome from "./calculateDisposableIncome.js";
import calculateSavings from "./calculateSavings.js";
import validateFormData from "./validateForm.js";
const app = express();
const port = 3003;
app.use(cors());
app.use(express.json());

let storedData = {};

app.get("/info", (req, res) => {
    console.log(storedData);
    res.json({ data: storedData });
});

app.post("/calculate", (req, res) => {
    const data = req.body; // Parsed data from JSON
    let result = { yearCalculation: 0, monthlyPayment: 0 };
    const targetAmount = 1000000; // 1 million dollars :)
    try {
        validateFormData(data); // Throws an error if invalid

        const disposableIncome = calculateDisposableIncome(
            Number(data.income),
            Number(data.monthlySpend)
        );
        if (data.debtTime && data.debtInterest && data.debt) {
            result.monthlyPayment = calculateDebt(
                data.debt,
                data.debtInterest,
                data.debtTime
            );
            result.yearCalculation += Number(data.debtTime); // Add debt time to yearCalculation
        }

        result.yearCalculation += Number(
            calculateSavings(disposableIncome, data.monthlySpend)
        );

        const inflationRate = 0.02; // 2% inflation rate average in Canada
        const annualInterestRate = 0.14; // 14% average annual return for VFV.TO over last 10 years

        result.yearCalculation += Number(
            calculateInvesting(
                disposableIncome,
                annualInterestRate,
                inflationRate,
                targetAmount
            )
        );

        storedData = result;
        res.json({
            success: true,
            message: "Valid calculation",
            data: { result },
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
            data: { result },
        });
    }
});

app.post("/success", (req, res) => {
    storedData = { data: { age: 50 } };
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
