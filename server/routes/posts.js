import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getPosts,
  likePost,
  updatePost,
} from "../controllers/posts.js";
import { upload } from "../multer.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", upload.single("selectedFile"), createPost);
router.get("/:id", getPost);
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
router.patch("/:id/likePost", likePost);

export default router;
