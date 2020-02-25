const {sequelize} = require('../../config');
const {comments}     = require('../../model');

module.exports = {
    getAll: async (req,res) => {
       const result = await comments.findAll({}); 
       res.json({
           message:'Lists Data',
           data:result
       })
    },
    postData: async (req,res) => {

            const result    = await comments.create(req.body);
            res.json({
                message:'Data Successfully added.',
                data:result
            })
             
    },
    getById: async (req,res) => {
        const result = await comments.findAll({
            where:{
                id_user:req.params.id
            }
        }); 
        res.json({
            data:result
        })
    },

    editData: async (req,res) => {
        let data = req.body;
        const result    = await comments.update(data,{
            where:{
                id_comment:req.params.id
            }
        })
        res.json({
            message:'update successfully',
            data:result
        })
    },
    deleteData: async (req,res) => {
        let data = {
            status:'off'
        };
        const result    = await comments.update(data,{
            where:{
                id_comment:req.params.id
            }
        })
        res.json({
            message:'delete successfully',
            data:result
        })
    }


}