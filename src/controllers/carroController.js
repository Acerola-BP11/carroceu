const Carro = require('../models/Carro')
const lodash = require('lodash')

module.exports = {
    create: async (req, res) => {
        await Carro.create(req.body)
        return res.redirect('/list')
    },

    form:(_, res) => res.render('carros/form'),

    list: async (_, res) => {
        let carrosList = await Carro.findAll()
        return res.render('carros/list', {carrosList})
    },
    
    edit: async (req, res) => {
        const data = req.body
        const carro = await Carro.find(data.id)
        carro = await carro.set({
            modelo: data.modelo,
            marca: data.marca,
            valor: data.valor
        })
        await carro.save()
    }
}