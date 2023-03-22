import express from 'express';

const app = express();

const port = 5000;
app.listen(port, console.log(`Server started on port: ${port}`));

app.get("/api", (req, res) => {
    res.json({"users": ["userOne", "userTwo", "userThree"]})
});