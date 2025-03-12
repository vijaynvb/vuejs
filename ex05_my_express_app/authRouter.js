import express from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import users from "./mockDB.js"; 

dotenv.config();

const router = express.Router();
const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";

/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: User authentication and authorization
 */

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Register a new user
 *     description: Creates a new user with a hashed password and role.
 *     tags: [Authentication]
 *     operationId: signupUser
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 example: user
 *               lastName:
 *                 type: string
 *                 example: 1
 *               email:
 *                 type: string
 *                 example: user.1@example.com
 *               password:
 *                 type: string
 *                 example: password
 *               location:
 *                 type: string
 *                 example: Bengaluru, India
 *               role:
 *                 type: string
 *                 example: user
 *                 description: Role of the user (default is "user")
 *     responses:
 *       201:
 *         description: User registered successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User registered successfully
 *                 user:
 *                   type: object
 */
router.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password, location, role = "user" } = req.body; // Default role is "user"

  if (users.find((user) => user.email === email)) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { 
    id: users.length + 1, 
    firstName, 
    lastName, 
    email, 
    password: hashedPassword, 
    location, 
    role // Include role
  };

  users.push(user);

  res.status(201).json({ message: "User registered successfully", user });
});

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: User login
 *     description: Authenticates user and returns a JWT token.
 *     tags: [Authentication]
 *     operationId: loginUser
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: user.1@example.com
 *               password:
 *                 type: string
 *                 example: password
 *     responses:
 *       200:
 *         description: Login successful.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Login successful
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *       401:
 *         description: Invalid credentials.
 */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = users.find((user) => user.email === email);
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

  const token = jwt.sign(
    { id: user.id, email: user.email, role: user.role }, // Include role in JWT
    SECRET_KEY,
    { expiresIn: "1h" }
  );

  res.json({ message: "Login successful", token });
});

export default router;