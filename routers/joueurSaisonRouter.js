const joueurSaisonRouter = require('express').Router();
const joueurSaisonModel = require('../modelRouter');

saisonRouter.get('/', async (req, res) => {
    const [club] = await clubModel.findClub();
    return res.json(club);
});

module.exports = saisonRouter;