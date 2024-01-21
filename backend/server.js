import express from "express";
import calculateDebt from "./calculateDebt.js";
import calculateInvesting from "./calculateInvesting.js";
import cors from "cors";
const app = express();
const port = 3003;
app.use(cors());
app.use(express.json())

let storedData = {};

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

app.get("/", (req, res) => {
    console.log(calculateInvesting);
    res.json(calculateDebt());
});

app.get("/info", (req, res) => {
    res.json(storedData);
});

app.post("/calculate", (req, res) => {
    const data = req.body;
    try {
        validateFormData(data);
    } catch (error) {
        res.json({
            success: false,
            message: "Invalid data",
            data: {},
        });
    }

    let result = 100; // Replace this with your calculation

    res.json({
        success: true,
        message: "Valid data",
        data: { result },
    });
});

app.post("/success", (req, res) => {
    console.log(req.body);
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
