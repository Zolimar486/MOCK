const router = require("express").Router();
const {cloudinary} = require ('../utils/cloudinary')
const Post = require("../models/Post")


router.post('/', async(req,res)=> {
    
    const {title, image} = req.body;

    try{
        if(image){
            const uploadRes= await cloudinary.uploader.upload(image, {
                upload_preset:"blog",
            });

            if(uploadRes){
                const newPost = new Post({
                    title,
                    image:uploadRes,
                })

                const savePost= await newPost.save()
                res.status(200).json(savePost)
            }

        }


    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }

})


router.put('/:id', async(req,res) => {

    const {title, image} = req.body;
     
    try {
        let post = await Post.findById(req.params.id);
        // Delete image from cloudinary
       
        // Upload image to cloudinary
        if(image){
            const uploadRes= await cloudinary.uploader.upload(image, {
                upload_preset:"blog",
            })

            if(uploadRes){
                const data = {
                    title: req.body.title || post.title,
                    image:uploadRes || post.image,
                }

                post = await Post.findByIdAndUpdate(req.params.id, data, { new: true });
                res.status(200).json(post);

            }

        }  
        
        
      }catch (err) {
        console.log(err);
      }
})


router.get('/find', async(req,res) => {
    try{
        const postFind= await Post.find();
        res.status(200).json(postFind)

    }catch(err){
        res.status(500).json(err)
    }
})

router.get('/:id', async(req,res)=> {
    try{

        const find= await Post.findById(req.params.id)
        res.status(200).json(find)
        
    }catch(err){
        res.status(500).json(err)
    }
})





module.exports = router;