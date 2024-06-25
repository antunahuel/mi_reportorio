import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';

const Canciones = sequelize.define(
    'Canciones',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },

        titulo: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        artista: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        tono: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
    },
    {
        tableName:'Canciones',
        timestamps: false
    },
);

export default Canciones;