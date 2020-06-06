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


router.get('/tickets/getTickets', function(req,res,next){
    Ticket.find(req.params, (err, tickets)=>{
        res.send(tickets)
    })
})

router.get('/tickets/getOpenTickets', function(req,res,next){
    console.log("in open tickets function");
    var query = Ticket.find({ 'status': 'Open'}).sort('-createdAt');
    query.exec(function(err, tickets) {
      if (err) return handleError(err);
      res.send(tickets);
    });
})

router.get('/tickets/getClosedTicketsByStaff/:id', function(req,res,next){
    const id = req.params.id;
    console.log("ID IS " + id);

    var query = Ticket.find({ 'status': 'Closed', 'acceptedBy._id': id}).sort('createdAt');
    query.exec(function(err, tickets) {
      if (err) return handleError(err);
      res.send(tickets);
    });
})

router.get('/tickets/getTicketsByUser/:id', function(req,res,next){
    const id = req.params.id;
    var query = Ticket.find({ 'owner._id': id}).sort('-createdAt');
    query.exec(function(err, tickets) {
      if (err) return handleError(err);
      res.send(tickets);
    });
})


router.put('/updateTicket/:id', function(req, res, next) {
    const id = req.params.id;
    Ticket.updateOne({_id: id}, {$set: req.body,}, function(err, ticket){});
})

module.exports = router

