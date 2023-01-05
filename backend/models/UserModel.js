import {Sequelize} from "sequelize"; 
import db from "../config/Database.js"; //import database yang conect dari db
 
const {DataTypes} = Sequelize;
 
//Create Table userAuth --> variable user
//Masukkan database ke object User untuk selanjutnya di gunakan isinya berdasarkan namanya
const User = db.define('userAuth',{ 
    // id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    gender: DataTypes.STRING
},{
    freezeTableName:true
});
 
export default User; //export default user untuk dapat digunakan (seperti hal nya library)
 
(async()=>{
    await db.sync();
})();