const { isNumber, isNil } = require("lodash")

module.exports = {
    validate: async (req, res, next) => {
        const body = await req.body
        if(isNil(body.modelo) || isNil(body.marca) || isNil(body.valor)){
            await res.sendStatus(200, 'Não foram enviados os valores corretos')
        }else if(!!isNumber(body.valor)){
            await res.sendStatus(200, 'O valor não é um numero')
        }else{
            console.log('foi')
            await next()
        }
    },
    validateid: async (req, res, next) => {
        const body = await req.body
        if(isNil(body.id)){
            await res.sendStatus(200, 'ID Invalido')
        }else{
            await next()
        }
    }
}