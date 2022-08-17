const Ticket = require('../models/Ticket');
class myDB {
    constructor(){
        this.tickets = []
    }


    /**
     * create a new ticket
     * @param {string} username 
     * @param {number} price 
     */
    create(username, price){
        const ticket = new Ticket(username, price);
        this.tickets.push(ticket);
        return ticket;
    }

    bulkCreate(username, price, quantity=1){
        const bulkTickets = [];
        for(let i =0; i<quantity; i++){
            const ticket = this.create(username, price);
            bulkTickets.push(ticket);
        }
        return bulkTickets;
    }

    allTickets(){
        return this.tickets;
    }
/**
 * 
 * @param {number} ticketId 
 * @returns {Ticket}
 */
    findById(ticketId){
        const ticket = this.tickets.find(ticket=>ticket.id === ticketId);
        return ticket;
    }

    updateById(ticketId, ticketBody){
        const ticket = this.findById(ticketId);
        ticket.username = ticketBody.username ?? ticket.username;
        ticket.price = ticketBody.price ?? ticket.price;
        ticket.updateAt = new Date();

        return ticket;
    }
/**
 * 
 * @param {numner} ticketId
 * @returns {Array<Ticket>} 
 */
    deleteById(ticketId){
        const index = this.tickets.findIndex(ticket=>ticket.id === ticketId);
       if(index !== -1){
        this.tickets.splice(index, 1);
        return true;
       }else{
        return false;
       }
    }

    findByUsername(username){
        const tickets  = this.tickets.filter(ticket=>ticket.username === username);
        return tickets;
    }

    updateByUsername(username, ticketBody){
        const tickets = this.findByUsername(username);

        for(let i=0; i<tickets.length; i++){
            tickets[i].username = ticketBody.username ?? tickets[i].username;
            tickets[i].price = ticketBody.price ?? tickets[i].price;
            tickets.updateAt = new Date();
        }
        return tickets;

    }
    deleteByUsername(username){
       const tickets = this.findByUsername(username);
       const index = this.tickets.findIndex((ticket=>ticket.username === username));
       if(index !== -1){
        this.tickets.splice(index, tickets.length);
        return true;
       }else{
        return false;
       }
    }

    draw(winnerCount){

    }

}


const db = new myDB();

module.exports = db;
