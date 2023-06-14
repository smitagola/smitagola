import { db } from "../db.js";
import express from "express";
import { createUser, getUsers, getUser } from "../controllers/user.js";

const router = express.Router();

//GET all user
router.get("/", getUsers);

//GET user form login
router.post("/login", getUser);

// CREATE new user
router.post("/new", createUser);

export default router;