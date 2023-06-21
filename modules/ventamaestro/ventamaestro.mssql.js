const mssqlcon = require('../../dbconnection');

class VentaMaestroMSSql { 

   async getAllVentaMaestro() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().execute("SP_SELECT_VENTAS");
    return res.recordset;
  }

  async getOneVentaMaestro(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("VENTA_ID", id)
    .execute("SP_FILTRAR_VENTAS");    
    return res.recordset;
  }

  async addVentaMaestro(venta) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("VENTA_CLIENTE_ID", venta.VENTA_CLIENTE_ID)
    .input("VENTA_FECHA", venta.VENTA_FECHA)
    .input("VENTA_TOTAL", venta.VENTA_TOTAL)
    .execute("SP_CREAR_VENTAS");
    return res;
 }

 async updateVentaMaestro(venta) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("VENTA_ID", venta.VENTA_ID)
    .input("VENTA_CLIENTE_ID", venta.VENTA_CLIENTE_ID)
    .input("VENTA_FECHA", venta.VENTA_FECHA)
    .input("VENTA_TOTAL", venta.VENTA_TOTAL)
    .execute("SP_ACTUALIZAR_VENTAS");
    return res;
 }

 async deleteVentaMaestro(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("VENTA_ID", id)
    .execute("SP_ELIMINAR_VENTAS");
    return res;
  }

}

module.exports = new VentaMaestroMSSql();