import { DataTypes, Sequelize } from "sequelize";
import { DB_NAME, DB_HOST, DB_PASSWORD, DB_USERNAME } from '$env/static/private'

export const sequelize = new Sequelize(DB_NAME, DB_USERNAME!,  DB_PASSWORD!, {
    host : DB_HOST,
    dialect : "mysql"
})

export const User = sequelize.define('users', {
    username : {
        type : DataTypes.STRING
    },
    email : {
        type : DataTypes.STRING
    },
    password : {
        type : DataTypes.STRING
    },
    token : {
        type : DataTypes.TEXT('long')
    },
    image : {
        type : DataTypes.TEXT('long')
    }
})