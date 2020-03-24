const userSchema = require('../../model/user')

const userPost = (req, res) => {
  const body = req.body;
  const user = new userSchema({
    name: body.name,
    lastName: body.lastName,
    age: body.age
  });
  user.save();
  res.status(200).json({
    user
  })
}

const userGet = (req, res) => {
  userSchema.find({}).exec((err, user) => {
    res.status(200).json({
      user
    })
  });
}

const userByIdGet = (req, res) => {
  const name = req.params.name;
  userSchema.find({ name: name }).exec((err, user) => {
    res.status(200).json({
      user
    })
  });
}

const userPut = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  userSchema.findByIdAndUpdate(id, body, { new: true }, (err, userUpdate) => {
    res.status(200).json({
      userUpdate
    })
  })
}

const userDelete = (req, res) => {
  const id = req.params.id;
  userSchema.findByIdAndRemove(id, (err, userUpdate) => {
    res.status(200).json({
      userUpdate
    })
  })
}

module.exports = {
  userPost,
  userGet,
  userByIdGet,
  userPut,
  userDelete
}

