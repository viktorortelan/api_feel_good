import * as BD from  '../repository/AddCardRepository.js';

import { Router } from 'express';
const endpoint = Router();

endpoint.post('/addCard', async (req, resp) => {
  
    try {
        
        let card = req.body; 
        let id = await BD.AddCard(card);

        resp.send({
            novoId:id
        })
    } catch (err) {
        resp.status(400).send({
            error: err.message
        })
    }

});

export default endpoint;