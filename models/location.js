'use strict';


module.exports = (db, DataTypes) => {
    const Location = db.define('locations', {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        country: {
            type: DataTypes.STRING(300),
            allowNull: false
        },
        state : {
            type: DataTypes.STRING(300),
            allowNull: false
        },
        city: {
            type: DataTypes.STRING(300),
            allowNull: false
        },
        line1: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        line2: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        zipCode: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        longitude: {
            type: DataTypes.DOUBLE(11, 10),
            allowNull: true
        },
        latitude: {
            type: DataTypes.DOUBLE(11, 10),
            allowNull: true
        },
    });
    return Location;
}