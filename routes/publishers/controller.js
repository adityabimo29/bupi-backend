const {sequelize} = require('../../config');
const {publishers}     = require('../../model');

module.exports = {
    getAll: async (req,res) => {
       const result = await publishers.findAll({}); 
       res.json({
           message:'Lists Data',
           data:result
       })
    },
    postData: async (req,res) => {

            const result    = await publishers.create(req.body);
            res.json({
                message:'Data Successfully added.',
                data:result
            })
             
    },
    getById: async (req,res) => {
        const result = await publishers.findOne({
            where:{
                id_author:req.params.id
            }
        }); 
        res.json({
            data:result
        })
    },

    editData: async (req,res) => {
        let data = req.body;
        const result    = await publishers.update(data,{
            where:{
                id_author:req.params.id
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
        const result    = await publishers.update(data,{
            where:{
                id_author:req.params.id
            }
        })
        res.json({
            message:'delete successfully',
            data:result
        })
    }


}