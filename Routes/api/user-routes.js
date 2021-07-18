const router = require("express").Router()
const User = require("../../Models/User")
const Thought = require("../../Models/Thought")

router.get("/", (req, res) => {
    User.find({})
        .populate("friends")
        .populate("thoughts")
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
        .populate("thoughts")
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


router.put("/:id", (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })

        .then(userData => {
            res.json(userData)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.put("/:userId/friends/:friendId", (req, res) => {
    User.findByIdAndUpdate(req.params.userId, {
        $push: {
            friends: req.params.friendId
        },

    },
        { new: true })
        .populate("friends")
        .then(userData => {
            res.json(userData)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})
router.delete("/:userId/friends/:friendId", (req, res) => {
    User.findByIdAndUpdate(req.params.userId, {
        $pull: {
            friends: req.params.friendId
        },

    },
        { new: true })
        .populate("friends")
        .then(userData => {
            res.json(userData)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

module.exports = router