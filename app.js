const express = require("express");
const app = express();
const port = 3001;

// a middleware that enables us to read the received JSON data
app.use(express.json());

const todos = [{ todo: " wake up", isCompleted: false }, { todo: "Eat Breakfast", isCompleted: false }];

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});