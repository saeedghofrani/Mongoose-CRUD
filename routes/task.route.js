"use strict";

const express = require('express');
const router = express.Router();
const { _get, _post, _put, _delete } = require('../controller/task.controller.js');

router.route('/')
    .get(_get)
    .post(_post)
    .put(_put)
    .delete(_delete);

module.exports = router;