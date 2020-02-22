const bcrypt = require('bcrypt');

const hashingPassword = async myPlaintextPassword => {

  const hashPassword =  await bcrypt.hash(myPlaintextPassword, 10, function(err, hash) {
        // Store hash in your password DB.
        return hash;
    });

    return hashPassword;
}

module.exports = hashingPassword;
