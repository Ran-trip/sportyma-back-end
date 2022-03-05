const clubJoueurRouteur = require('./clubJoueurRouter');
const clubRouter = require('./clubRouter');
const joueurRouter = require('./joueurRouter');
const saisonRouter = require('./saisonRouter');


const setupRoutes = (app) => {
    app.use('/club', clubRouter);
    app.use('/joueur', joueurRouter);
    app.use('/saison', saisonRouter);
    app.use('/clubJoueur', clubJoueurRouteur);
};

module.exports = setupRoutes;
