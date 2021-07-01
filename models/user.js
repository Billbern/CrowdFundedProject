'use strict';

module.exports = (db, DataTypes) => {
    const Users = db.define('users', {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        username: {
            type: DataTypes.STRING(300),
            unique:true,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(300),
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(300),
            allowNull: true
        },
        isVerified: {
            type: DataTypes.BOOLEAN(),
            defaultValue: false
        }
    });

    return Users;
}
