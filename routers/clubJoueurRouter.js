const clubJoueurRouter = require('express').Router();
const clubJoueurModel = require('../model/clubJoueurModel');

clubJoueurRouter.get('/', async (req, res) => {
    const [clubJoueur] = await clubJoueurModel.findClubJoueur();
    return res.json(clubJoueur);
});

module.exports = clubJoueurRouter;