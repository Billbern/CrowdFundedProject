'use strict';

module.exports = (db, DataTypes) => {
    const Admin = db.define('admins', {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        role: {
            type: DataTypes.STRING(100),
            allowNull: false
        }
    });

    return Admin;
}
