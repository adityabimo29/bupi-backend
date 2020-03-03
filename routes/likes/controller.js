const {sequelize} = require('../../config');
const {likes}     = require('../../model');

module.exports = {
    getAll: async (req,res) => {
       const result = await likes.findAll({}); 
       res.json({
           message:'Lists Data',
           data:result
       })
    },
    postData: async (req,res) => {

            const result    = await likes.create(req.body);
            res.json({
                message:'Data Successfully added.',
                data:result
            })
             
    },
    getById: async (req,res) => {
        const result = await likes.findOne({
            where:{
                id_like:req.params.id
            }
        }); 
        res.json({
            data:result
        })
    },

    editData: async (req,res) => {
        let data = req.body;
        const result    = await likes.update(data,{
            where:{
                id_like:req.params.id
            }
        })
        res.json({
            message:'update successfully',
            data:result
        })
    },
    deleteData: async (req,res) => {
        
        const result    = await likes.destroy({
            where:{
                id_like:req.params.id
            }
        })
        res.json({
            message:'delete successfully',
            data:result
        })
    }


}