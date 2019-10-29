const User = require('../models/User');

module.exports = {
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },

  async store(req, res) {
    const { name, email , password } = req.body;

    const user = await User.create({ name, email , password });

    return res.json(user);
  },

  async update(req, res) {
    const dados = req.body;

    await User.update(dados, {
        where:{
          id: req.query.id
        }
      })
      .then((data) => {
        res.send(true)
      }).catch((error) => {
        console.log(error)
        res.send(false)
        }
    );
  },

  async show(req, res){
    const user = await User.findByPk(req.params.id);

    return res.json(user);
  },

  async destroy(req, res){
    await User.destroy({
      where:{
        id: req.params.id
      } 
    });

    return res.send();
  }

};