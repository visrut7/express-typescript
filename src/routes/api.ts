// src/routes/api.ts
import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

// GET /api/users
router.get("/cookie", (req: Request, res: Response) => {
  console.log(req.cookies);

  res.json({ message: "Cookie received" });
});

// POST /api/users
router.post("/users", (req: Request, res: Response) => {
  const { name } = req.body;
  // Handle user creation
  res.json({ message: `User ${name} created successfully` });
});

export default router;
