import express from "express";
import { addLecture, createCourse, getAllCourses, getCourseLectures } from "../controllers/courseController.js";
import singleUpload from "../middlewares/multer.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();
// get all courses without lectures
router.route('/allcourses').get(getAllCourses);

// create new course for admin 

router.route('/createcourse').post(isAuthenticated,authorizeAdmin,singleUpload,createCourse);


// Add lectures 

router.route("/course/:id").get(getCourseLectures).post(isAuthenticated,authorizeAdmin,singleUpload,addLecture);
// delete course

// get Course detail

// lecture delete
export default router;