const mssql = require('mssql');
class DBConnection {
  async getConnection() {
     try {
       return await mssql.connect({
              user: 'sys_admin',
              password: '12345',
              server: 'DAISY-CARBAJAL',
              database: 'fleurseternellehn',
              port: 1433,
              trustServerCertificate: true
       });
    }
    catch(error) {
      console.log(error);
    }
  }
}
module.exports = new DBConnection();