import express from "express";
import {
    addToPlaylist,
    forgetPassword,
  getChangePassword,
  getMyProfile,
  login,
  logout,
  register,
  removeFromPlaylist,
  resetPassword,
  updateProfile,
} from "../controllers/userController.js";
import { isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

// to register a new user
router.route("/register").post(register);
// login
router.route("/login").post(login);
// logout
router.route("/logout").get(logout);

//get my profile

router.route("/myp").get(isAuthenticated, getMyProfile);

// change password
router.route("/changepassword").put(isAuthenticated, getChangePassword);

// update profile
router.route("/updateprofile").put(isAuthenticated, updateProfile);
router.route("/forgetpassword").post(forgetPassword);
router.route("/resetpassword/:token").put(resetPassword);
router.route("/addtoplaylist").post(isAuthenticated,addToPlaylist);
router.route("/removefromplaylist").delete(isAuthenticated,removeFromPlaylist);

// update profile picture

// forget password
// reset password

// add to playlist

// remove from playlist

export default router;
