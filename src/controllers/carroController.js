const Carro = require('../models/Carro')

module.exports = {
    create: async (req, res) => {
        await Carro.create(req.body)
        return res.redirect('/carros/list')
    },

    form:(_, res) => res.render('carros/form'),

    list: async (_, res) => {
        let carrosList = await Carro.findAll()
        return res.render('carros/list', {carrosList})
    },
    
    edit: async (req, res) => {
        const data = req.body

        console.log(data)
        let carro = await Carro.findByPk(data.id)        
        carro = await carro.set({
            modelo: data.modelo,
            marca: data.marca,
            valor: data.valor
        })
        await carro.save()
        
        return res.redirect('/carros/list')
    },
    delete: async (req, res) => {
        const id = req.body.id        
        await deleteCar(id)
        return res.redirect('/carros/list')
    }
}

const deleteCar = async (id) => {
    await Carro.destroy({
        where: {
            id: id
        }
    })
}