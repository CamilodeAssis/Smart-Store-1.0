const jwt = require("jsonwebtoken");

const { promisify } = require("util");



module.exports = {
  eAdmin: async function (req, res, next) {
    var token = req.headers.authorization.split(' ')[1];
   
    console.log('Token ->', token);

    if (!token) {
      return res.status(400).json({
        error: true,
        message: "Failed: must be logged in to access the page. token required",
      });
    }

    try {
      const decode = await promisify(jwt.verify)(token, 'secretKey');
      req.userId = decode.id;
      
      return next();
    } catch (err) {
      console.log('erro aqui', err);
      return res.status(400).json({
        error: true,
        message: "Failed: must be logged in to access the page. token invalid",
      });

    }
  },
};
