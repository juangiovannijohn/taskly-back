import Card from "../models/cards.model.js";

export const getCards = async(req, res, next) => {
    try {
        const cards = await Card.find();
        res.status(200).json({ 
            message: 'Cards fetched successfully',
            cards
    });
} catch (error) {
        next(error);
    }
};

export const getCard = async(req, res, next) => {
    try {
        const card = await Card.findById(req.params.id)
        res.status(200).json({ 
            message: 'Card fetched successfully',
            card
        });
    } catch (error) {
        next(error);
    }
};

export const createCard = async(req, res, next) => {
    try {
        const {title,content, list_id} = req.body;
        const card = await Card.create({title, content, list_id})
        res.status(201).json({ 
            message: 'Card created successfully',
            card
        });
    } catch (error) {
        next(error);
    }
};

export const updateCard = async(req, res, next) => {
    try {
        const {title, content} = req.body
        const filter = { _id: req.params.id };
        const update = { title, content};

        const result = await Card.updateOne(filter, update);
        console.log({result})
        const card = await Card.findById(req.params.id)

        res.status(201).json({ 
            message: 'Card updated successfully',
            card
        });
    } catch (error) {
        next(error);
    }
};

export const deleteCard = async(req, res, next) => {
    try {
        const filter = { _id: req.params.id };
        const result = await Card.deleteOne(filter)
        console.log({result})
        res.status(201).json({ message: 'Card deleted successfully' });
    } catch (error) {
        next(error);
    }
};
