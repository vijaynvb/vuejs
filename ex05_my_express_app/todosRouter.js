import express from 'express';
import { xml2js, js2xml } from 'xml-js';
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();
const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";

// Sample data - stored in a local variable (for simplicity)
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
  },
  { 
    id: 3, 
    title: "Build a Personal Portfolio", 
    description: "Create a professional portfolio website using HTML, CSS, and JavaScript. Showcase your skills, projects, and achievements in an engaging manner. Ensure the website is fully responsive, includes an about section, project showcases, and a contact form. Utilize modern design trends like dark mode and animations for an enhanced user experience.", 
    due: "2025-03-20", 
    status: "Not Started" 
  },
  { 
    id: 4, 
    title: "Master JavaScript ES6+ Features", 
    description: "Deep dive into modern JavaScript ES6+ features, including arrow functions, template literals, destructuring, async/await, and modules. Learn how these features improve code readability and efficiency. Implement these concepts in real-world projects and explore the advantages they bring to web development.", 
    due: "2025-03-25", 
    status: "In Progress" 
  },
  { 
    id: 5, 
    title: "Develop a Full-Stack MERN App", 
    description: "Design and develop a full-stack application using MongoDB, Express, React, and Node.js (MERN stack). Set up backend APIs using Express.js, create a dynamic frontend with React, and manage state efficiently. Implement authentication, CRUD operations, and deploy the application to a cloud platform for accessibility.", 
    due: "2025-04-05", 
    status: "Not Started" 
  },
  { 
    id: 6, 
    title: "Learn TypeScript with Vue", 
    description: "Explore how TypeScript enhances Vue.js development by providing type safety, better IDE support, and improved maintainability. Understand TypeScript fundamentals, interfaces, and types before integrating them into Vue components, props, and store management with Pinia. Refactor an existing Vue project to leverage TypeScript benefits.", 
    due: "2025-04-10", 
    status: "Planned" 
  }
];

/**
 * Middleware to authenticate JWT tokens
 */
router.use((req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access Denied" });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid Token" });
    }
    req.user = user;
    next();
  });
});


/**
 * Middleware to check if the user is an admin
 */
const authorizeAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Access Denied: Admins only" });
  }
  next();
};

// Middleware to parse XML body
router.use((req, res, next) => {
    if (req.is('xml')) {
      let data = '';
      req.setEncoding('utf8');
      req.on('data', chunk => { data += chunk });
      req.on('end', () => {
        req.body = xml2js(data, { compact: true, ignoreComment: true, alwaysChildren: true });
        next();
      });
    } else {
      next();
    }
  });
  
  // Helper function to send response based on Accept header
  const sendResponse = (req, res, data) => {
    const accept = req.headers.accept || '';
    if (accept.includes('xml')) {
      const xml = js2xml(data, { compact: true, ignoreComment: true, spaces: 4 });
      res.type('application/xml').send(xml);
    } else {
      res.json(data);
    }
  };

/**
 * @swagger
 * components:
 *   schemas:
 *     Todo:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - due
 *         - status
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the todo item
 *         title:
 *           type: string
 *           description: The title of the task
 *         description:
 *           type: string
 *           description: A detailed description of the task
 *         due:
 *           type: string
 *           format: date
 *           description: The due date of the task (YYYY-MM-DD)
 *         status:
 *           type: string
 *           enum: [Not Started, In Progress, Completed]
 *           description: The current status of the task
 *       example:
 *         id: 1
 *         title: Learn HTML
 *         description: Master the basics of HTML, including elements, attributes, and page structuring.
 *         due: 2025-03-10
 *         status: In Progress
 */

/**
 * @swagger
 * tags:
 *   name: Todos
 *   description: The todos managing API
 */

/**
 * @swagger
 * /todos:
 *   get:
 *     summary: Returns the list of all the todos
 *     tags: [Todos]
 *     responses:
 *       200:
 *         description: The list of the todos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todo'
 */
router.get("/", (req, res) => {
  res.json(todos);
});

/**
 * @swagger
 * /todos/{id}:
 *   get:
 *     summary: Get the todo by id
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The todo id
 *     responses:
 *       200:
 *         description: The todo description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       404:
 *         description: The todo was not found
 */
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find((t) => t.id === id);
  if (!todo) return res.status(404).json({ error: "Todo not found" });
  res.json(todo);
});

/**
 * @swagger
 * /todos:
 *   post:
 *     summary: Create a new todo
 *     tags: [Todos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       201:
 *         description: The todo was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       500:
 *         description: Some server error
 */
router.post('/', (req, res) => {
    let newTodo = req.body;
    
    if (req.is('xml')) {
      newTodo = {
        task: newTodo.todo.task._text,
        completed: newTodo.todo.completed._text === 'true'
      };
    } else if (typeof newTodo === 'string') {
      try {
        newTodo = JSON.parse(newTodo);
      } catch (error) {
        return res.status(400).json({ error: 'Invalid JSON' });
      }
    }
  
    newTodo.id = todos.length + 1;
    todos.push(newTodo);
    res.status(201);
    sendResponse(req, res, { newTodo });
  });

/**
 * @swagger
 * /todos/{id}:
 *   put:
 *     summary: Update the todo by the id
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The todo id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       200:
 *         description: The todo was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       404:
 *         description: The todo was not found
 *       500:
 *         description: Some error happened
 */
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  // const updatedTodo = req.body;
  const todoIndex = todos.findIndex((t) => t.id === id);
  if (todoIndex === -1)
    return res.status(404).json({ error: "Todo not found" });
  // Preserve the ID and update the rest
  todos[todoIndex] = { ...todos[todoIndex], ...req.body, id };
  res.json(todos[todoIndex]);
});

/**
 * @swagger
 * /todos/{id}:
 *   delete:
 *     summary: Remove the todo by id
 *     tags: [Todos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The todo id
 *     responses:
 *       200:
 *         description: The todo was deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       404:
 *         description: The todo was not found
 */
router.delete("/:id",authorizeAdmin,(req, res) => {
  const id = parseInt(req.params.id);
  const todoIndex = todos.findIndex((t) => t.id === id);
  if (todoIndex === -1)
    return res.status(404).json({ error: "Todo not found" });
  const deletedTodo = todos.splice(todoIndex, 1)[0];
  res.json(deletedTodo);
});

export default router;