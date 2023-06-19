const Carro = require('../models/Carro')

module.exports = {
    create: async (req, res) => {
        await Carro.create(req.body)        
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
        return res.redirect('/carros/list')
    }
}