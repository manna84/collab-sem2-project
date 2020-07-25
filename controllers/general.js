const express = require('express')
const router = express.Router();

router.get("/",(req, res)=>{

    res.render("home", {
        title : "Home | BeMyPet"
    })

});

router.get("/forum",(req, res)=>{

    res.render("forum", {
        title : "Forum | BeMyPet"
    })

});

router.post("/forum",(req, res)=>{

    res.render("forum", {
        title : "Forum | BeMyPet"
    })

});
router.get("/registration",(req, res)=>{

    res.render("registration", {
        title : "Registration | BeMyPet"
    })

});

router.post("/registration",(req, res)=>{

    res.render("registration", {
        title : "Registration | BeMyPet"
    })

});
router.get("/login",(req, res)=>{

    res.render("login", {
        title : "Login | BeMyPet"
    })

});

router.post("/login",(req, res)=>{

    res.render("login", {
        title : "Login | BeMyPet"
    })

});

module.exports = router;