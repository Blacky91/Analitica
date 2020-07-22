var express = require('express');
var router = express.Router();
var juanModel =require('../models/juanModel');

router.get('/:id?',function(req,res,next){
    if(req.params.id){
        juanModel.getPostOfTheStudent(req.params.id,function(err,rows){
            if(err)
                {
                    res.json(err);
                }else{
                    res.json(rows);
                }
        });
    }    
    else{
        juanModel.getAllStudentsWithPost(function(err,rows){
            if(err){
                res.json(err);
            }else{
                res.json(rows);
            }
        });
    }
});


module.exports=router;