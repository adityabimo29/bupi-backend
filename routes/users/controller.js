const {sequelize} = require('../../config');
const {users}     = require('../../model');
const {roles}     = require('../../model');
const {genres}     = require('../../model');
const {comparePassword,hashingPassword} = require('../../helpers');
var jwt = require('jsonwebtoken');
var nodemailer = require('nodemailer');
const { QueryTypes } = require('sequelize');

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
            // console.log(res)
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
            const youtube   = req.body.link_video.split('v=');
            const result    = await users.create({
                ...req.body,
                password:hashing,
                link_video:youtube[1]
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
            const {id_user,email,first_name ,last_name,avatar,link_video,about,experience,id_role,id_genre} = result;

            const role = await roles.findOne({
                where:{
                    id_role:id_role
                }
            }); 

            const genre = await genres.findOne({
                where:{
                    id_genre:id_genre
                }
            }); 

            const genre_name = genre.name;
            const role_name  = role.name;
            
            
           const compare = await comparePassword(req.body.password,result.password);
           const token = await jwt.sign({ id_user,email,first_name ,last_name,avatar,link_video,about,experience, genre_name , role_name }, 'bupi-secret', { expiresIn:'30m' })
            if(compare){
                res.json({
                    message:'Login Success !',
                    token
                })
            }else{
                res.send({error:'Email or Password is wrong.'})
            }   
    },
    otherProfile: async (req,res) => {

        const result = await sequelize.query('SELECT u.id_user,u.first_name,u.last_name,u.email,u.avatar,u.experience,u.link_video,u.about,g.name AS genre , r.name AS role FROM users u JOIN genres g ON u.id_genre = g.id_genre JOIN roles r ON u.id_role = r.id_role WHERE u.id_user = :id_user',{
            replacements: { id_user: req.params.id },
            type: QueryTypes.SELECT
          });
          res.json({
            data:result
        })
      
    },
    listUsers: async (req,res) => {

        const result = await sequelize.query('SELECT *, g.name as genre , r.name as role FROM users u JOIN genres g ON u.id_genre = g.id_genre JOIN roles r ON u.id_role = r.id_role WHERE u.id_user != :id_user',{
            replacements: { id_user: req.params.id },
            type: QueryTypes.SELECT
          });
          res.json({
            data:result
        })
      
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
            const youtube   = req.body.link_video.split('v=');
            data = {
                ...req.body,
                password:hashing,
                link_video:youtube[1]
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
    },
    getByRole: async (req,res) => {
        const result = await users.findOne({
            where:{
                id_role:req.params.id
            }
        }); 
        res.json({
            data:result
        })
    },
    getByGenre: async (req,res) => {
        const result = await users.findOne({
            where:{
                id_genre:req.params.id
            }
        }); 
        res.json({
            data:result
        })
    },
    getByExp: async (req,res) => {
        const result = await users.findOne({
            where:{
                experience:req.params.value
            }
        }); 
        res.json({
            data:result
        })
    },
    sendEmail: async (req,res) => {

        var transporter = nodemailer.createTransport({
            host: "mail.porus.xyz",
            port: 465,
            auth: {
                user: 'bokoblin@porus.xyz',
                pass: 'XXklW]k^HbJr'
            }
        });

        // var mailOptions = {
        //     from: req.body.emailFrom,
        //     to: req.body.emailTo,
        //     subject: req.body.subject,
        //     text: req.body.text
        // };

        var mailOptions = {
            from: 'franjesky@hotmail.com',
            to: req.body.emailTo,
            subject: 'Recruit Member',
            text:'do you want to join us ?'
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) throw err;
            console.log('Email sent: ' + info.response);
        });

        res.json({
            status:'OK'
        })
    }


}