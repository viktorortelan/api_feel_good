import mysql from 'mysql2/promise';


const con = await mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    typeCast: function (field, next) {
        if(field.type === 'TINY' && field.length === 1) {
            return (field.string() === '1');
        }
        else if(field.type.includes('DECIMAL')) {
            return Number(field.string());
        }
        else {
            return next();
        }
    } 
    
});

console.log('api conectada com banco de dados!!');
export default con;