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

router.post('/insertTicket',function(req, res, next) {
    let ticketData = new Ticket(req.body);
    console.log('Ticket data before insert');
    console.log(ticketData);
    console.log('============');
    ticketData.save().then(item => {
        res.send(item);
    })
    .catch(err => {
        res.status(400).send(err);
    });
})

/* GET ticket by ID. */
router.get('/ticket/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < users.length) {
    res.json(users[id])
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
