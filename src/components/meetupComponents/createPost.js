const { validationResult } = require("express-validator");
const Post = require("../../models/Post/postModel");
const User = require("../../models/userModel");

module.exports = async (req, res) => {
    let { textPost } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });
    try {
        let user = await User.findById(req.user.id).select("-password");
        if (!user) return res.status(404).json("User not found");
        let newPost = new Post({
            textPost,
            name: user.name,
            userImg: user.image,
            user: req.user,
        });

        await newPost.save();

        res.json("Post is created, congratulations!");
    } catch (error) {
        console.error(error);
        return res.status(500).json("Server Error...");
    }
};
