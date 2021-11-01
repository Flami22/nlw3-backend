const User = require('../Models/User');
const bcrypt = require('bcrypt')

module.exports = {

async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
},

    async store(req, res) {

        const {name, email, cpf, password, data_nasc} = req.body;
        const data = {name, email, cpf, password, data_nasc};
        data.password = await bcrypt.hash(data.password, 8);
        const user = await User.create(data);

        return res.json(user);
    }
};