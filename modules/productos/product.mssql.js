const mssqlcon = require('../../dbconnection');
class ProductMSSql { 
   async getAllProducts() {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request().execute("SP_SELECT_PRODUCTOS");
    return res.recordset;
  }
  async getOneProduct(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("PROD_COD", id)
    .execute("SP_FILTRAR_PRODUCTOS");    
    return res.recordset;
  }
  async addProduct(prod) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("PROD_ID", prod.PROD_ID)
    .input("PROD_NOMBRE", prod.PROD_NOMBRE)
    .input("PROD_VALOR", prod.PROD_VALOR)
    .execute("SP_CREAR_PRODUCTOS");
    return res;
 }
 async updateProduct(prod) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("PROD_ID", prod.PROD_ID)
    .input("PROD_NOMBRE", prod.PROD_NOMBRE)
    .input("PROD_VALOR", prod.PROD_VALOR)
    .execute("SP_ACTUALIZAR_PRODUCTOS");
    return res;
 }
 
 async deleteProduct(id) {
    const conn = await mssqlcon.getConnection();
    const res = await conn.request()
    .input("PROD_COD", id)
    .execute("SP_BORRAR_PRODUCTO");
    return res;
  }
}
module.exports = new ProductMSSql();