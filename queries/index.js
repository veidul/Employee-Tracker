const util = require("util");

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database: 'employees'
})

const query = util.promisify(db.query).bind(db)

module.exports = queryManager;