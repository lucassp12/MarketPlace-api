const User = require("../models/User");

class UserController {
  async store(req, res) {
    const { email } = req.body;

    if (await User.findOne({ email })) {
      return res.status(400).json({ error: "User already exists" });
    }

    const user = await User.create(req.body);

    return res.json(user);
  }
  async index(req, res) {
    const user = await User.find();
    return res.json(user);
  }

  async show(req, res) {
    const { id } = req.params.id;

    if (!(await User.findOne({ id }))) {
      return res.status(400).json({ error: "User not found" });
    }

    const user = await User.findOne({ id });

    return res.json(user);
  }
  async destroy(req, res) {
    const { id } = req.params.id;

    if (!(await User.findOne({ id }))) {
      return res.status(400).json({ error: "Id invalid" });
    }

    await User.findOneAndRemove({ id });

    return res.json({ menssage: "Sucess" });
  }
  async update(req, res) {
    const { id } = req.params.id;

    if (!(await User.findOne({ id }))) {
      return res.status(400).json({ error: "Id invalid" });
    }

    const user = await User.findByIdAndUpdate({ id }, req.body, {
      new: true
    });

    return res.json(user);
  }
}

module.exports = new UserController();
