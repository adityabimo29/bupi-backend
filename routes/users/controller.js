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
        const hashing   = await hashingPassword(req.body.password);
        const result    = await users.create({
            ...req.body,
            password:hashing
        });
        res.json({
            message:'Data Successfully added.',
            data:result
        })
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
    
}