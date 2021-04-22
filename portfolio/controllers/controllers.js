const Contact = require('../../models/Contact');

module.exports = {
    create
}

async function create(req, res) {
    try{
        await Contact.create({
            message: req.body.message,
            email: req.body.email
        })
    } catch {
        console.log('backend fail')
    }
}