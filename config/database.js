const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URI);


const modelDefiners = [
    require('../models/user'),
    require('../models/admin'),
    require('../models/author'),
    require('../models/profile'),
    require('../models/location')
];

for (const modelDefiner of modelDefiners){
    modelDefiner(sequelize, DataTypes);
}


module.exports = sequelize;