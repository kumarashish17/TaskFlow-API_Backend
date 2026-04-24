import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} from "../controllers/taskController.js";

const router = express.Router();

router.use(authMiddleware);

router.post("/", createTask);
router.get("/", getTasks);

// support both update methods
router.put("/:id", updateTask);
router.patch("/:id", updateTask);

router.delete("/:id", deleteTask);

export default router;