const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const users = [
    { id: 1, email: "test@example.com" },
    { id: 2, email: "user@example.com" },
];

// Endpoint for handling forgot password
app.post("/api/forgot-password", (req, res) => {
    const { email } = req.body;

    const user = users.find((user) => user.email === email);
    if (user) {
        return res.status(200).json({ success: true, message: "Password reset email sent." });
    } else {
        return res.status(404).json({ success: false, message: "Email not found." });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
