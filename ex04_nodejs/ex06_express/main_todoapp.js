import express, { urlencoded } from "express";
import expressOasGenerator from 'express-oas-generator';

const app = express();

let todos = [
    { 
      id: 1, 
      title: "Learn HTML", 
      description: "Master the basics of HTML, including elements, attributes, and page structuring.", 
      due: "2025-03-10", 
      status: "In Progress" 
    },
    { 
      id: 2, 
      title: "Learn Vue JS", 
      description: "Explore Vue.js fundamentals, including components, directives, and state management.", 
      due: "2025-03-15", 
      status: "Not Started" 
    }
  ];

// crud
expressOasGenerator.init(app, {}); 

//get all todos
app.get("/todos", (req, res) => {
    res.json(todos);
  });
  
  // get by id
  app.get("/todos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find((t) => t.id === id);
    if (!todo){
        return res.status(404).json({ error: "Todo not found" });
    } 
    else 
        res.json(todo);
  });
  
  // create todo
  app.post("/todos", (req, res) => {
    const newTodo = req.body;
    newTodo.id = todos.length + 1;
    todos.push(newTodo);
    res.status(201).json(newTodo);
  });
  
  app.put("/todos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const updatedTodo = req.body;
    const todoIndex = todos.findIndex((t) => t.id === id);
    if (todoIndex === -1)
      return res.status(404).json({ error: "Todo not found" });
    todos[todoIndex] = updatedTodo;
    res.json(updatedTodo);
  });
  
  app.delete("/todos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const todoIndex = todos.findIndex((t) => t.id === id);
    if (todoIndex === -1)
      return res.status(404).json({ error: "Todo not found" });
    const deletedTodo = todos.splice(todoIndex, 1)[0];
    res.json(deletedTodo);
  });

// listening 
app.listen(3000, ()=>{console.log("Server is running;")});