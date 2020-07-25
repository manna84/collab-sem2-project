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

    const errors = [];

    if (req.body.email == "") {
        errors.push("Please enter an Email...!!!")
    }

    if (req.body.password == ""){
        errors.push("Please enter a Password...!!!")
    }

    if (req.body.password.length > 0 && req.body.password.length < 6) {
        errors.push("Password must contain atleast 6 characters")
    }

    const passValid = /^(?=.*\d.*)(?=.*[a-z].*)(?=.*[A-Z].*)(?=.*[@#%\*\-+=~\[\]{}<>\?].*)/

    if (!req.body.password.match(passValid)) {
        errors.push("Entered password must contain at least a special character, a numeric digit, an uppercase and a lowercase letter")
    }

    let noRefreshLogin = {
        email : req.body.email,
        password : req.body.password,
    }

    if(errors.length>0) {
        res.render("login", {
            title : "Login Page", 
            errorMessages : errors,
            retainData : noRefreshLogin
        })
    }

    else {
        res.redirect("/");
    }
 
});

module.exports = router;