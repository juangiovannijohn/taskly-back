import Board from "../models/board.model.js";

export const getBoards = async(req, res, next) => {
    try {
        const boards= await Board.find();
        res.status(200).json({ 
            message: 'Board fetched successfully',
            boards
    });
    } catch (error) {
        next(error);
    }
};

export const getBoard = async (req, res, next) => {
    try {
        const board = await Board.findById(req.params.id)

        res.status(200).json({ 
            message: 'Board fetched successfully',
            board 
        });
    } catch (error) {
        next(error);
    }
};

export const createBoard = async (req, res, next) => {
    try {
        const {title, user_id} = req.body;
        const board = await Board.create({title, user_id})
        res.status(201).json({ 
            message: 'Board created successfully',
            board 
        });
    } catch (error) {
        next(error);
    }
};

export const updateBoard = async (req, res, next) => {
    try {
        const {title} = req.body
        const filter = { _id: req.params.id };
        const update = { title};

        const result = await Board.updateOne(filter, update);
        console.log({result})
        const board = await Board.findById(req.params.id)

        res.status(201).json({ 
            message: 'Board updated successfully',
            board
        });

    } catch (error) {
        next(error);
    }
};

export const deleteBoard = async (req, res, next) => {
    try {
        const filter = { _id: req.params.id };
        const result = await Board.deleteOne(filter)
        console.log({result})
        res.status(201).json({ message: 'Board deleted successfully' });
    } catch (error) {
        next(error);
    }
};
