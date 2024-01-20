const express = require("express");
const app = express();
const port = 3003;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/calculate", (req, res) => {
    const data = req.body;

    result = 100; // Replace this with your calculation

    // Send back a response
    res.json({ message: "Calculations complete", result: result });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
