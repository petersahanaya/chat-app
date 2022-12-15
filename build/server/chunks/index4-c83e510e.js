import { Sequelize, DataTypes } from 'sequelize';
import { D as DB_NAME, a as DB_USERNAME, b as DB_PASSWORD, c as DB_HOST } from './private-f66ec900.js';

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql"
});
const User = sequelize.define("users", {
  username: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  userId: {
    type: DataTypes.STRING()
  },
  token: {
    type: DataTypes.TEXT("long")
  },
  image: {
    type: DataTypes.TEXT("long")
  }
});

export { User as U };
//# sourceMappingURL=index4-c83e510e.js.map
