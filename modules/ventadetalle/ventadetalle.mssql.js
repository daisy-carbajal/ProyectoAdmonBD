const mssqlcon = require('../../dbconnection');

class VentaDetalleMSSql { 

async getAllVentaDetalle() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().execute("SP_SELECT_VENTADETALLE");
    return res.recordset;
  }

  async getOneVentaDetalle(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("VENTADET_ID", id)
    .execute("SP_FILTRAR_VENTADETALLE");    
    return res.recordset;
  }

  async addVentaDetalle(ventad) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("VENTADET_ID", ventad.VENTDET_COD)
    .input("VENTADET_PROD_ID", ventad.VENTDET_CODPRO)
    .input("VENTADET_VALOR", ventad.VENTDET_CANTIDAD)
    .execute("SP_CREAR_VENTADETALLE");
    return res;
 }

 async updateVentaDetalle(ventad, id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("VENTADET_ID", id)
    .input("VENTADET_PROD_ID", ventad.VENTDET_CODPRO)
    .input("VENTADET_VALOR", ventad.VENTDET_CANTIDAD)
    .execute("SP_ACTUALIZAR_VENTADETALLE");
    return res;
 }

 async deleteVentaDetalle(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("VENTADET_ID", id)
    .execute("SP_EILIMNAR_VENTADETALLE");
    return res;
  }

}

module.exports = new VentaDetalleMSSql();