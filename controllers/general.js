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

module.exports = router;