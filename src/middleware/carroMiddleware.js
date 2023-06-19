const { isNumber, isNil } = require("lodash")

module.exports = {
    validate: async (req, res, next) => {
        const body = await req.body
        if(isNil(body.modelo) || isNil(body.marca) || isNil(body.valor)){
            await res.send('Não existem valores enviados')
        }else if(isNumber(!!body.valor)){
            await res.send('O valor enviado não é um numero valido')
        }else{
            next()
        }
    },
    validateid: async (req, res, next) => {
        const body = await req.body
        if(isNil(body.id)){
            res.send('ID invalido')
        }else{
            next()
        }
    }
}