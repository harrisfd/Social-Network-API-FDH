const router = require("express").Router()
const User = require("../../Models/User")
const Thought = require("../../Models/Thought")
const Reaction = require("../../Models/Reaction")

router.post("/", (req, res) => {
    Thought.create(req.body)
        .then(thoughtData => {
            User.findByIdAndUpdate(req.body.userId, {
                $push: {
                    thoughts: thoughtData._id
                }
            }).then(userdata => {
                res.json(thoughtData)
            })
                .catch(error => {
                    res.status(500).json(error)
                })
        })
        .catch(error => {
            res.status(500).json(error)
        })
})


router.get("/", (req, res) => {
    Thought.find({})
        // .populate("reactions")

        .then(thoughtData => {
            res.json(thoughtData)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})


router.get("/:id", (req, res) => {
    Thought.findById(req.params.id)
        // .populate("reactions")

        .then(thoughtData => {
            res.json(thoughtData)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.post("/:thoughtId/reactions", (req, res) => {

    Thought.findByIdAndUpdate(req.params.thoughtId, {
        $push: {
            reactions: req.body
        }
    }, { new: true })
        .then(thoughtData => {
            res.json(thoughtData)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.delete("/:thoughtId/reactions", (req, res) => {

    Thought.findByIdAndUpdate(req.params.thoughtId, {
        $pull: {
            reactions: {
                reactionId: req.body.reactionId
            }
        }
    }, { new: true })
        .then(thoughtData => {
            res.json(thoughtData)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})
router.delete("/:id", (req, res) => {
    Thought.findByIdAndDelete(req.params.id)
     
        .then(thoughtData => {
            res.json(thoughtData)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

router.put("/:id", (req, res) => {
    Thought.findByIdAndUpdate(req.params.id, req.body, {new:true})
      
        .then(thoughtData => {
            res.json(thoughtData)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

module.exports = router