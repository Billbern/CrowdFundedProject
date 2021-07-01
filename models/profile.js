'use strict';

module.exports = (db, DataTypes) => {
    const Profile = db.define('profiles', {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        firstname: {
            type: DataTypes.STRING(300),
            allowNull: false
        },
        lastname: {
            type: DataTypes.STRING(300),
            allowNull: false
        },
        bio: {
            type: DataTypes.TEXT(),
            allowNull: true
        },
        birthDate: {
            type: DataTypes.DATEONLY(),
            allowNull: false
        } 
    });

    return Profile;
}
