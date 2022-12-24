const ticketModel = require("../models/ticket.model")

const createTicket = async (item) => {
    console.log(item)
    try {
        const ticket = await ticketModel.create(item);
        console.log(ticket)
        return ticket;
    } catch (error) {
        throw new Error("Failed to create ticket!");
    }
}

const bookmarkTicket = async (id) => {
    try {
        // const ticket = ticketModel.find
    } catch (error) {
        
    }
}

module.exports = {createTicket};