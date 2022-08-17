const router = require('express').Router();
const db = require('../db/db')

router.get('/t/:ticketId', (req, res)=>{
    const ticketId = req.params.ticketId;
    const ticket = db.findById(ticketId)
    res.status(200).json({message: "Ticket Found: ", ticket})
}); 
router.patch('/t/:ticketId', (req, res)=>{
    const ticketId = req.params.ticketId;
    const ticket = db.updateById(ticketId, req.body);
    res.status(200).json({message: "ticket updated successfully: ", ticket})
})
router.delete('/t/:ticketId', (req, res)=>{
    const ticketId = req.params.ticketId;
    const ticket = db.deleteById(ticketId);
    res.status(201).send();
})

router.get('/u/:username', (req, res)=>{
    const username = req.params.username;
    const ticket = db.findByUsername(username);
    res.status(200).json({message: "Ticket Found for username: ", username, ticket})
})
router.patch('/u/:username', (req, res)=>{
    const username = req.params.username;
    const ticket = db.updateByUsername(username, req.body);
    res.status(200).json({message: "Ticket upadte successfully", ticket})
})
router.delete('/u/:username', (req, res)=>{
    const username = req.params.username;
    const ticket = db.deleteByUsername(username);
    res.status(200).send();
})


router.post('/new', (req, res)=>{
    const {username, price} = req.body;
    const ticket = db.create(username, price);
    res.status(200).json({message: "Ticket create successfully", ticket});
})
router.post('/bulk', (req, res)=>{
    const {username, price, quantity} = req.body;
    const tickets = db.bulkCreate(username, price, quantity);
     res.status(200).json({message: "Bulk Tickets create successfully", tickets});
})
router.get('/draw', (req, res)=>{})
router.get('/', (_req, res)=>{
    const allTickets = db.allTickets();
    const totalTicket = allTickets.length;
    res.status(200).json({message: "All Tickets: ", totalTicket, allTickets})
})

module.exports = router;