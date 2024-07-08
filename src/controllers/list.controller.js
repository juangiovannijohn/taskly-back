import List from "../models/lists.model.js";

export const getLists = async (req, res, next) => {
    try {
        const lists = await List.find();
        res.status(200).json({ 
            message: 'List fetched successfully',
            lists
    });
    } catch (error) {
        next(error);
    }
};

export const getList = async (req, res, next) => {
    try {
        const list = await List.findById(req.params.id)
        res.status(200).json({ 
            message: 'List fetched successfully',
            list
        });
    } catch (error) {
        next(error);
    }
};

export const createList = async (req, res, next) => {
    try {
        const {title, board_id} = req.body;
        const list = await List.create({title, board_id})
        res.status(201).json({ 
            message: 'List created successfully',
            list
        });
    } catch (error) {
        next(error);
    }
};

export const updateList = async (req, res, next) => {
    try {
        const {title} = req.body
        const filter = { _id: req.params.id };
        const update = { title};

        const result = await List.updateOne(filter, update);
        console.log({result})
        const list = await List.findById(req.params.id)

        res.status(201).json({ 
            message: 'List updated successfully',
            list
        });
    } catch (error) {
        next(error);
    }
};

export const deleteList = async (req, res, next) => {
    try {
        const filter = { _id: req.params.id };
        const result = await List.deleteOne(filter)
        console.log({result})
        res.status(201).json({ message: 'List deleted successfully' });
    } catch (error) {
        next(error);
    }
};
