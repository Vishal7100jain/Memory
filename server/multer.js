import fs from "fs";
import multer from "multer";
import path from "path";

// Ensure the uploads folder exists
const uploadsDir = path.join(process.cwd(), "uploads");

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir); // Use the absolute path
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

// File filter example (optional)
const fileFilter = (req, file, cb) => {
  cb(null, true);
};

export const upload = multer({ storage, fileFilter });
