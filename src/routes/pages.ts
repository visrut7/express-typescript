// src/routes/pages.ts
import express, { Router, Request, Response } from "express";
import path from "path";

const router: Router = express.Router();

// Serve HTML pages
router.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/about", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../public/about.html"));
});

export default router;
