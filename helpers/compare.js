const bcrypt = require('bcrypt');

const comparePassword = async (myPassword,hash) => {
    
    const hashing = bcrypt.compare(myPassword, hash).then(res => {
        return res;
    })

    return hashing;
    
}

module.exports = comparePassword;