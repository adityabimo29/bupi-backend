const {connection} = require('../../config');

module.exports = {
    getAllUsers: async (req,res) => {
        // execute will internally call prepare and query
        connection.execute(
            'SELECT * FROM users',
            function(err, results, fields) {
            console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
            res.json({
                message:'lists users',
                data:results,
            })
            // If you execute same statement again, it will be picked from a LRU cache
            // which will save query preparation time and give better performance
            }
        );
    }
}