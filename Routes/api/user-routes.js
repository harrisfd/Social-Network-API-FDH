const router = require("express").Router()
const User = require("../../Models/User")


router.get("/", (req, res) => {
    User.find({})
        .then(userData => {
            res.json(userData)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.get("/:id", (req, res) => {
    User.findById(req.params.id)
        .populate("friends")
        // .populate("thoughts")
        .then(userData => {
            res.json(userData)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.delete("/:id", (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(userData => {
            res.json(userData)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})


router.post("/", (req, res) => {
    User.create(req.body)
        .then(userData => {
            res.json(userData)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})


module.exports = router