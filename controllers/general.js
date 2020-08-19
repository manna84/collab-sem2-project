const express = require('express')
const router = express.Router();

router.get("/", (req, res) => {

    res.render("home", {
        title: "Home | BeMyPet"
    })

});






router.get("/forum",(req, res)=>{

// router.get("/forum", (req, res) => {

//     res.render("forum", {
//         title: "Forum | BeMyPet"
//     })

// });

router.post("/", (req, res) => {

    res.render("home", {
        title: "Home | BeMyPet"
    })

});

router.get("/registration", (req, res) => {

    res.render("registration", {
        title: "Registration | BeMyPet"
    })

});

router.post("/registration", (req, res) => {

    const errors = [];


    if (req.body.name == "") {
        errors.push("Please enter a name...!!!")
    }

    const nameValid = /^(?=.*\d.*)|(?=.*[@#%\*\-+=~\[\]{}<>\?].*)/

    if (req.body.name.match(nameValid)) {
        errors.push("Name must contain only alphabets")
    }

    if (req.body.lastName == "") {
        errors.push("Please enter your Last name...!!!")
    }

    if (req.body.lastName.match(nameValid)) {
        errors.push("Last name must contain only alphabets")
    }

    if (req.body.email == "") {
        errors.push("Please enter an Email...!!!")
    }

    if (req.body.password == "") {
        errors.push("Please enter a Password...!!!")
    }

    if (req.body.confirmPassword == "") {
        errors.push("Please enter to confirm Password...!!!")
    }

    if (req.body.password.length > 0 && req.body.password.length < 6) {
        errors.push("Password must contain atleast 6 characters")
    }

    const passValid = /^(?=.*\d.*)(?=.*[a-z].*)(?=.*[A-Z].*)(?=.*[@#%\*\-+=~\[\]{}<>\?].*)/

    if (!req.body.password.match(passValid)) {
        errors.push("Entered password must contain at least a special character, a numeric digit, an uppercase and a lowercase letter")
    }

    if (req.body.password != req.body.confirmPassword) {
        errors.push("Passwords are not matching")
    }

    let noRefreshSignup = {
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
    }

    if (errors.length > 0) {
        res.render("registration", {
            title: "Registration Page",
            errorMessages: errors,
            retainData: noRefreshSignup
        })
    }

    else {
        res.redirect("/");
    }
});

// console.log(req.body)

router.get("/login", (req, res) => {

    res.render("login", {
        title: "Login | BeMyPet"
    })

});

router.post("/login", (req, res) => {

    const errors = [];

    if (req.body.email == "") {
        errors.push("Please enter an Email...!!!")
    }

    if (req.body.password == "") {
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
        email: req.body.email,
        password: req.body.password,
    }

    if (errors.length > 0) {
        res.render("login", {
            title: "Login Page",
            errorMessages: errors,
            retainData: noRefreshLogin
        })
    }

    else {
        res.redirect("/");
    }

});

module.exports = router;