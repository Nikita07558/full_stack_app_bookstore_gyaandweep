// import express from "express";
// import { getBook } from "../controller/book.controller.js";

// const router =express.Router();

// router.get("/",getBook)

// export default router;

import express from "express";
import { getBook, saveBook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);        // Fetch from Google API
router.post("/", saveBook);      // Save to MongoDB

export default router;
