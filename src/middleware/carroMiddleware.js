const { isNumber } = require("lodash")

module.exports = {
    validate: async (req, res, next) => {
        const body = req.body
        if(isNil(body.modelo) || isNil(body.marca) || isNil(body.valor)){
            res.send('Não existem valores enviados')
        }else if(isNumber(!!body.valor)){
            res.send('O valor enviado não é um numero valido')
        }else{
            next()
        }
    }
}