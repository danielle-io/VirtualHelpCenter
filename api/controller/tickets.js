var Ticket = require('../model/tickets.js');

const { Router } = require('express')
const router = Router()

/* GET tickets listing. */
router.get('/tickets', function (req, res, next) {
    Ticket.find(function (err, tickets) {
        if (err) return console.error(err);
        res.send(tickets);
    })
})

/* GET tickets listing. */
router.get('/Ticket', function (req, res, next) {
    Ticket.find(function (err, Ticket) {
        if (err) return console.error(err);
        res.send(Ticket);
    })
})

router.post('/insertTicket',function(req, res, next) {
    let ticketData = new Ticket(req.body);
    console.log('Ticket data before insert');
    console.log(ticketData);
    console.log('============');
    ticketData.save();
})

/* GET ticket by ID. */
router.get('/ticket/:id', function (req, res, next) {
  const id = req.params.id;
  Ticket.findById(ids, (err, ticket)=>{
    res.send(course);
});
  
})

module.exports = router

