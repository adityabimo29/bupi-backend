const {sequelize} = require('../../config');
const {instruments}     = require('../../model');

module.exports = {
    getAll: async (req,res) => {
       const result = await instruments.findAll({}); 
       res.json({
           message:'Lists Data',
           data:result
       })
    },
    postData: async (req,res) => {

            const result    = await instruments.create(req.body);
            res.json({
                message:'Data Successfully added.',
                data:result
            })
             
    },
    getById: async (req,res) => {
        const result = await instruments.findOne({
            where:{
                id_instrument:req.params.id
            }
        }); 
        res.json({
            data:result
        })
    },

    editData: async (req,res) => {
        let data = req.body;
        const result    = await instruments.update(data,{
            where:{
                id_instrument:req.params.id
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
        const result    = await instruments.update(data,{
            where:{
                id_instrument:req.params.id
            }
        })
        res.json({
            message:'delete successfully',
            data:result
        })
    }


}