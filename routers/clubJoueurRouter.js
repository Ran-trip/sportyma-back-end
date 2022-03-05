const clubJoueurRouteur = require('express').Router();
const clubJoueurModel = require('../model/clubJoueurMode');

clubJoueurModel.get('/', async (req, res) => {
    const [clubJoueur] = await clubJoueurModel.findClubJoueur();
    return res.json(clubJoueur);
});

module.exports = clubJoueurRouteur;