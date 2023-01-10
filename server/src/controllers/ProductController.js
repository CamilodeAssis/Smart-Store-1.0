const Product = require("../models/Product");


module.exports = {
  async store(req, res) {

    if(req.file){
    
          return res.json({
            error: false,
            message: "Product created successfully",
          });
    }
    return res.json({
        error: true,
        message: "São permitidas apenas imagens JPG, JPEG ou PNG",
      });
    
  },
  async index() {},
};
