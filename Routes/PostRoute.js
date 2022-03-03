const express = require('express');
const router = express.Router();
const Post = require('../Models/PostSchema');

//Create post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        body: req.body.body,
        hashtags: req.body.hashtags,
    });

    try{
    const savedPost = post.save()
    res.json(savedPost);
    } catch (err){
        res.json({message:err})
    }
});

//Gets all posts
router.get('/', async (req,res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
    }
    catch (err) {
        res.json({message:err})
    }
});

//Gets posts which has specifies hashtag
router.get('/hashtag/:hashtags', async (req,res) => {
    try{
        const postSearch = await Post.find({hashtags:req.params.hashtags});
        res.json(postSearch);
    } catch (err) {
        res.json({message:err});
    }
});

//Delete post by ID
router.delete('/:postId', async (req,res) => {
    try {
        const deletedPost = await Post.deleteOne({_id:req.params.postId});
        res.json(deletedPost)
    } catch (err) {
        res.json({message:err});
    }
});

//Publish created post
router.patch('/publish/:postId/', async (req,res) => {
    try {
        const publishedPost = await Post.updateOne({_id:req.params.postId}, {$set: {postStatus:'Posted'}});
        res.json(publishedPost);
    } catch (err) {
        res.json({message:err});
    }
});

//Gets spesific post by ID
router.get('/:postID', async (req,res) => {
    try{
        const postSearch = await Post.findById(req.params.postID);
        res.json(postSearch);
    } catch (err) {
        res.json({message:err});
    }
});

//Edit post title and body
router.patch('/title/:postId', async (req,res) => {
    try {
        const updatedTitlePost = await Post.updateOne({_id:req.params.postId}, {$set: {title: req.body.title}});
        res.json(updatedTitlePost);
    } catch (err) {
        res.json({message:err});
    }
});

router.patch('/body/:postId', async (req,res) => {
    try {
        const updatedBodyPost = await Post.updateOne({_id:req.params.postId}, {$set: {body:req.body.body}});
        res.json(updatedBodyPost);
    } catch (err) {
        res.json({message:err});
    }
});

module.exports = router;