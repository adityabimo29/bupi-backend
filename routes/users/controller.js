const {connection} = require('../../config');
const {comparePassword,hashingPassword} = require('../../helpers');
var jwt = require('jsonwebtoken');

module.exports = {
    getAllUsers: async (req,res) => {
        // execute will internally call prepare and query
        connection.execute(
            'SELECT * FROM users',
            function(err, results, fields) {
            res.json({
                message:'lists users',
                data:results,
            })

            }
        );
    },
    login: async (req,res) => {
        const token = jwt.sign({ id_users,email,firstname }, 'bupi-secret', { expiresIn:'30m' });

    }
}