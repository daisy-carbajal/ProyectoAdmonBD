const mssqlcon = require('../../dbconnection');

class ClienteMSSql { 

   async getAllCliente() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().execute("SP_SELECT_CLIENTES");
    return res.recordset;
  }

  async getOneCliente(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("CLIENTE_ID", id)
    .execute("SP_FILTRAR_CLIENTES");    
    return res.recordset;
  }

  async addCliente(cliente) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("CLIENTE_NOMBRE", cliente.CLIENTE_NOMBRE)
    .execute("SP_CREATE_CLIENTES");
    return res;
 }

 async updateCliente(cliente) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("CLIENTE_ID", cliente.CLIENTE_ID)
    .input("CLIENTE_NOMBRE", cliente.CLIENTE_NOMBRE)
    .execute("SP_ACTUALIZAR_CLIENTES");
    return res;
 }

  async deleteCliente(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("CLIENTE_ID", id)
    .execute("SP_ELIMINAR_CLIENTES");
    return res;
  }

}

module.exports = new ClienteMSSql();