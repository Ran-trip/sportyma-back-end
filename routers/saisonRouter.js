const saisonRouter = require('express').Router();
const saisonModel = require('../model/saisonModel');

saisonRouter.get('/', async (req, res) => {
    const [saison] = await saisonModel.findSaison();
    return res.json(saison);
});

module.exports = saisonRouter;