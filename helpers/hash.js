const bcrypt = require('bcrypt');

const hashingPassword = async myPlaintextPassword => {

  const hashPassword =  await bcrypt.hash(myPlaintextPassword, 10).then(res => {
    return res;
  });

    return hashPassword;
}

module.exports = hashingPassword;
