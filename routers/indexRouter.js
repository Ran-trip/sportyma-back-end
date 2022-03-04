const club = require('./clubRouter');
// const joueur = require('./joueurRouter');
// const saison = require('./saisonRouter');


const setupRoutes = (app) => {
    app.use('/club', club);
    // app.use('/joueur', joueurRouter);
    // app.use('/saison', saisonRouter);
};

module.exports = setupRoutes;
