import {Sequelize} from "sequelize"; // menggunakan sequelize sebagai ORM (untuk mengubah tabel dr db menjadi object)
 
const db = new Sequelize('db_server','root','admin1234',{ //instansiasi db dalam method db
    host: 'localhost',
    dialect: 'mysql'
});
 
export default db; //export method db agar bisa digunakan oleh fungsi lain dengan cara import