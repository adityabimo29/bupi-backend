const {sequelize} = require('../../config');
const {users}     = require('../../model');
const {comparePassword,hashingPassword} = require('../../helpers');
var jwt = require('jsonwebtoken');

module.exports = {
    getAllUsers: async (req,res) => {
       const result = await users.findAll({}); 
       res.json({
           message:'Lists Users',
           data:result
       })
    },
    register: async (req,res) => {
        
        const emailExist = await users.findOne({
            where:{
                email:req.body.email
            }
        }).then(res=>{
            console.log(res)
            if(res !== null){
                return true
            }else{
                return false
            }
        }); 

        if(emailExist){
            res.json({
                message:'Email Already Exists.',
            })
        }else{
            const hashing   = await hashingPassword(req.body.password);

            const result    = await users.create({
                ...req.body,
                password:hashing
            });
            res.json({
                message:'Data Successfully added.',
                data:result
            })
        }        
    },
    login: async (req,res) => {

            const result = await users.findOne({
                where:{
                    email:req.body.email
                }
            }); 
            
           const compare = await comparePassword(req.body.password,result.password);
           const {id_user,email,first_name} = result;
           const token = await jwt.sign({ id_user,email,first_name }, 'bupi-secret', { expiresIn:'30m' })
            if(compare){
                res.json({
                    message:'Login Success !',
                    token
                })
            }else{
                res.send({error:'Email or Password is wrong.'})
            }   
    },

    getByEmail: async (req,res) => {
        const result = await users.findOne({
            where:{
                email:req.params.email
            }
        }); 
        res.json({
            data:result
        })
    },

    editUser: async (req,res) => {
        let data = {};
        if(req.body.password === undefined){
            data = req.body;
        }else{
            const hashing = await hashingPassword(req.body.password);
            data = {
                ...req.body,
                password:hashing
            }
        }
        const result    = await users.update(data,{
            where:{
                id_user:req.params.id
            }
        })
        res.json({
            message:'update successfully',
            data:result
        })
    },
    deleteUser: async (req,res) => {
        let data = {
            status:'off'
        };
        const result    = await users.update(data,{
            where:{
                id_user:req.params.id
            }
        })
        res.json({
            message:'delete successfully',
            data:result
        })
    }


}