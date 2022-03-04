const connection = require('../config/db-config');

const TABLE = 'saison';

const findSaison = () => connection.promise().query(`SELECT * FROM ${TABLE}`);

module.exports = {
    findSaison,
}