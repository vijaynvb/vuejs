import express from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import users from "./mockDB.js";

dotenv.config();

const router = express.Router();
const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";

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
 * @swagger
 * tags:
 *   name: Users
 *   description: User management operations
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users (Protected)
 *     description: Retrieve a list of all users (Requires JWT Token).
 *     tags: [Users]
 *     operationId: getUsers
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of users retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   firstName:
 *                     type: string
 *                   lastName:
 *                     type: string
 *                   email:
 *                     type: string
 *                   location:
 *                     type: string
 *       401:
 *         description: Unauthorized - JWT token required.
 */
router.get("/", (req, res) => {
  res.json(users);
});

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get user by ID (Protected)
 *     description: Retrieve a single user by their ID (Requires JWT Token).
 *     tags: [Users]
 *     operationId: getUserById
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The user ID.
 *     responses:
 *       200:
 *         description: User found successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 firstName:
 *                   type: string
 *                 lastName:
 *                   type: string
 *                 email:
 *                   type: string
 *                 location:
 *                   type: string
 *       404:
 *         description: User not found.
 *       401:
 *         description: Unauthorized - JWT token required.
 */
router.get("/:id", (req, res) => {
  const user = users.find((u) => u.id == req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

export default router;