const joueurRouter = require('express').Router();
// const joueurModel = require('../model/joeurModel');

joueurRouter.get('/', async (req, res) => {
    const [joueur] = await joueurModel.findClub();
    return res.json(club);
});

module.exports = joueurRouter;