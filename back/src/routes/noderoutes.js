import express from "express"
import { createNote, deleteNote, getAllnotes, getNotebyId, updateNote} from "../Controllers/noteController.js";
const router = express.Router();

router.get("/", getAllnotes);
router.get("/:id", getNotebyId);
router.post("/", createNote);
router.put("/:id",updateNote);
router.delete("/:id",deleteNote);

export default router;
