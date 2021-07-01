'use strict';

module.exports = (db, DataTypes) => {
    const Author = db.define('authors', {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING(300),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(300),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(300),
            allowNull: true
        },
        isVerified: {
            type: DataTypes.BOOLEAN(),
            allowNull: false,
            defaultValue: false
        }
    });

    return Author;
}
