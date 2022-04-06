module.exports = {
    dialect: 'mysql',
    host: process.env.MYSQL_HOST,
    username: process.env.MYSQL_USER,
    port: process.env.MYSQL_PORT,
    password:process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,

            define: {
                timestamps: true,
                underscored: true,
                    }
    
    };
