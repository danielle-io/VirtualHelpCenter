const { Router } = require('express')
const router = Router();

let Ticket = require('../model/tickets');


/* GET tickets listing. */
router.get('/tickets', function (req, res, next) {
    Ticket.find(function (err, tickets) {
        if (err) return console.error(err);
        res.send(tickets);
    })
})

// /* GET tickets listing. */
// router.get('/Ticket', function (req, res, next) {
//     Ticket.find(function (err, Ticket) {
//         if (err) return console.error(err);
//         res.send(Ticket);
//     })
// })

router.post('/insertTicket',function(req, res, next) {
    let ticketData = new Ticket(req.body);
    ticketData.save((err, ticket)=>{
        res.send(ticket);
    });
    
})

/* GET ticket by ID. */
router.get('/ticket/:id', function (req, res, next) {
  const id = req.params.id;
  Ticket.findById(id, (err, ticket)=>{
    res.send(ticket);
  });
})

//
router.get('/tickets/getTickets', function(req,res,next){
    console.log("inside ticket post request");
    Ticket.find(req.params, (err, tickets)=>{
        console.log(tickets);
        res.send(tickets)
    })
})

//Deleting Ticket
router.delete('/deleteTicket/:id', function(req, res, next) {
    const id = req.params.id;
    console.log("deleting")
    Ticket.findByIdAndDelete(id,function(err, res){
        console.log(res)
    });
})

//Updating Ticket
// router.put('/updateTicket/:id', function(req, res, next){
//     let ticketData = new Ticket(req.body)
//     const id = req.params.id;
//     console.log([ticketData, id]);
//     Ticket.update({_id : id}, {$set: ticketData});
// })

router.put('/updateTicket/:id', function(req, res, next) {
    const id = req.params.id;
    console.log("ticket id is " + id);
    Ticket.updateOne({_id: id}, {$set: req.body,}, function(err, ticket){});
})

module.exports = router

