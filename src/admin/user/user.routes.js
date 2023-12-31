'use strict'

const userController = require('./user.controller');
const express = require('express');
const api = express.Router();
const { ensureAuth } = require('../../services/authenticated');

api.get('/', ensureAuth , userController.test);
api.post('/register', userController.register);
api.post('/login', userController.login);
//api.put('/update/:id', ensureAuth, userController.updateUser);

module.exports = api;