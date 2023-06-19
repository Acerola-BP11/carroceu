const { isNumber, isNil } = require("lodash");

module.exports = {
  validate: (req, res, next) => {
    const body = req.body;
    if (isNil(body.modelo) || isNil(body.marca) || isNil(body.valor)) {
       return res.render('error', { message: 'Os valores enviados são inválidos' });
    } else if (!isNumber(body.valor)) {
        return res.render('error', { message: 'O valor não é um número' });
    } else {
        console.log(typeof(body.valor))
        next();
    }
  },

  validateid: (req, res, next) => {
    const body = req.body;
    if (isNil(body.id)) {
      return res.status(200).send('ID inválido');
    } else {
      next();
    }
  }
};