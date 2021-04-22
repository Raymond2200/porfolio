
const express = require('express');
const router = express.Router();
const postCtrl = require('../../controllers/contact');



// POST new post
router.post('/', contactCtrl.create)

module.exports = router;