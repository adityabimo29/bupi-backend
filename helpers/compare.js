const bcrypt = require('bcrypt');

const comparePassword = async myPassword => {
    
    const hashing = bcrypt.compare(myPassword, hash, function(err, result) {
        return result;
    });

    return hashing;
    
}

module.exports = comparePassword;