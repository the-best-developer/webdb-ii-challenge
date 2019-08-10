const express = require('express');

// database access using knex
const db = require('../data/car-dealer.js');

const router = express.Router();

// ##########
//    GET
// ##########

router.get('/', async (req, res) => {
    try {
        const cars = await db("cars");
        res.status(200).json(cars);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;

    try {
        const car = await db("cars").where({ id: id });
        (car.length !== 0)
            ?
                res.status(200).json(car)
            :
                res.status(404).json({ message: "Account not found."})
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// ##########
//    Account
// ##########

router.post('/', async (req, res) => {
    const {VIN, Make, Model, Mileage} = req.body;

    try {
        const newCar = await db('cars').insert({ VIN: VIN, Make: Make, Model: Model, Mileage: Mileage })
        
        if (newCar.length) {
            const newCarEntry = await db("cars").where({ id: newCar[0]});
            res.status(200).json(newCarEntry)
        }
        else {
            res.status(400).json({ message: "Car was not added"})
        }
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;