const connection = require('../config/db-config');

const TABLE = 'club';

const findClub = () => connection.promise().query(`SELECT * FROM ${TABLE}`);

module.exports = {
    findClub,
}