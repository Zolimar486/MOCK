const mongoose= require('mongoose');

const PostSchema= new mongoose.Schema({
   title:{
       type:String,
       required:true,
       unique:true,
   },


   image:{
       type: Object,
       required:true,
   },

  

   

}, 
{timestamps: true}
);

module.exports= mongoose.model('Post', PostSchema)