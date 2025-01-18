// src/routes/api.ts
import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

// GET /api/users
router.get("/users", (req: Request, res: Response) => {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
  ];
  res.json(users);
});

// POST /api/users
router.post("/users", (req: Request, res: Response) => {
  const { name } = req.body;
  // Handle user creation
  res.json({ message: `User ${name} created successfully` });
});

export default router;
