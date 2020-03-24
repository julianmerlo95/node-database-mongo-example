const express = require('express');
const route = express.Router();
const userMethod = require('../controller/user.controller')

route.post('/users', userMethod.userPost)
route.get('/users', userMethod.userGet)
route.get('/users/:name', userMethod.userByIdGet)
route.put('/users/:id', userMethod.userPut)
route.delete('/users/:id', userMethod.userDelete)

module.exports = route;