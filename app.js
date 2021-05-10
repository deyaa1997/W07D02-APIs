const express = require("express");
const app = express();
const port = 3001;

// a middleware that enables us to read the received JSON data
app.use(express.json());

const todos = [
  { todo: " wake up", isCompleted: false },
  { todo: "Eat Breakfast", isCompleted: false },
];

app.get("/todos", (req, res) => {
  // set the response status code to 200 (OK)
  res.status(200);
  // sends back a response of all todos
  res.json(todos);
});

app.post("/create/todo" , (req,res) => {
    let av = true
    for (let x = 0 ; x < todos.length ; x++){
        if(req.body.todo === todos[x].todo){
            av = false
        }
    }
    if (av === true){
        res.status(201)
        const add = {todo:req.body.todo , isCompleted :req.body.isCompleted }
        todos.push(add)
        res.json(todos[todos.length-1])
    }else{
        res.status(404)
        res.json("You cant add")
    }
})

app.put("/update/todo/:name" , (req,res) => {
    let find = false
    let i ;
    for (let x = 0 ; x < todos.length ; x++){
        if(req.params.name === todos[x].todo){
            find = true
            i = x
        }
    }
    if (find === true){
        res.status(202)
        todos[i] = {todo:req.body.todo , isCompleted :req.body.isCompleted}
        res.json(todos[i])
    }else{
        res.status(404)
        res.json("Not Found :- You cant update")
    }
})

app.delete("/delete/todo/:name" , (req,res) => {
    let find = false
    let i ;
    for (let x = 0 ; x < todos.length ; x++){
        if(req.params.name === todos[x].todo){
            find = true
            i = x
        }
    }
    if (find === true){
        res.status(202)
        res.json(todos[i])
        todos.splice(i , 1)
    }else{
        res.status(404)
        res.json("Not Found :- You cant delete")
    }
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
