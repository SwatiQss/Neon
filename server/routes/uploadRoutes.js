const express = require("express");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const router = express.Router();
cloudinary.config({ 
    cloud_name: 'ddspxsta9', 
    api_key: '294679411787139', 
    api_secret: 'OcUScaL6h6V5u6lDm999ELds944' // Click 'View API Keys' above to copy your API secret
});

// Cloudinary Storage Configuration
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "profile_pictures", // Folder name in Cloudinary
    format: async (req, file) => "jpeg", // You can also use 'jpeg' or 'webp'
    public_id: (req, file) => Date.now() + "-" + file.originalname,
  },
});

const upload = multer({ storage });

// Upload Image and Store URL in Database
router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    if (!req.file || !req.file.path) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const imageUrl = req.file.path; // Cloudinary returns the image URL
    res.json({ message: "Upload successful", imageUrl });
  } catch (error) {
    console.error("Upload Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
