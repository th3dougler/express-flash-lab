var express = require("express");
var router = express.Router();
const Blog = require("../models/blog");
/* GET home page. */
router.get("/", async function (req, res, next) {
  try{
    let allPosts = await Blog.find({}).sort("-createdAt");
    res.render("index",{
      title: "Express Flash Lab",
      flash: req.flash(),
      all_posts: allPosts,
    })
    
  }catch(err){
    res.render("error", {
      message: "index controller, get root",
      error: err,
    });
  }
});
router.post("/", async function (req, res, next) {
  try {
    console.log(req.body);
    await Blog.create(req.body);
    req.flash("success", `Thank you for posting ${req.body.name}`);

    res.redirect("/");
  } catch (err) {
    req.flash("failure", "Error, could not create new post");
    res.redirect("/");
  }
});

module.exports = router;
