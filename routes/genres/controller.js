const {sequelize} = require('../../config');
const {genres}     = require('../../model');

module.exports = {
    getAll: async (req,res) => {
       const result = await genres.findAll({}); 
       res.json({
           message:'Lists Data',
           data:result
       })
    },
    postData: async (req,res) => {

            const result    = await genres.create(req.body);
            res.json({
                message:'Data Successfully added.',
                data:result
            })
             
    },
    getById: async (req,res) => {
        const result = await genres.findOne({
            where:{
                id_genre:req.params.id
            }
        }); 
        res.json({
            data:result
        })
    },

    editData: async (req,res) => {
        let data = req.body;
        const result    = await genres.update(data,{
            where:{
                id_genre:req.params.id
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
        const result    = await genres.update(data,{
            where:{
                id_genre:req.params.id
            }
        })
        res.json({
            message:'delete successfully',
            data:result
        })
    }


}