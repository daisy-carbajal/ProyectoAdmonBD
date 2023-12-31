class Module {
    constructor(app) {
      this.app = app;
    }
  
    init() {
      const ProductController = require("./productos/product.controller");
      new ProductController(this.app);

      const ClienteController = require("./clientes/cliente.controller");
      new ClienteController(this.app);

      const VentaDetalleController = require("./ventadetalle/ventadetalle.controller");
      new VentaDetalleController(this.app);

      const VentaMaestroController = require("./ventamaestro/ventamaestro.controller");
      new VentaMaestroController(this.app);
    }
  }
  
  module.exports = Module;