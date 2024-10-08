const express = require('express');
const Order = require('../models/Order');
const router = express.Router();

// Get all orders
router.get('/', async (req, res) => {
    const orders = await Order.find().populate('user').populate('items.product');
    res.json(orders);
});

// Create an order
router.post('/', async (req, res) => {
    const order = new Order(req.body);
    try {
        await order.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
