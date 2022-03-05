const connection = require('../config/db-config');

const TABLE = 'joueur';

const findJoueur = () => connection.promise().query(`SELECT * FROM ${TABLE} `);

module.exports = ({
    findJoueur,
})