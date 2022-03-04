const clubRouter = require('express').Router();
const clubModel = require('../model/clubModel');

clubRouter.get('/', async (req, res) => {
    const [club] = await clubModel.findClub();
    return res.json(club);
});

module.exports = clubRouter;
