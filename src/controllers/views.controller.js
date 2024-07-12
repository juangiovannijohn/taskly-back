import Board from "../models/board.model.js";
import Card from "../models/cards.model.js";
import List from "../models/lists.model.js";
import User from "../models/user.model.js";

export const getUserBoard = async(req, res, next) => {
    try {
        const board_id = req.params.id;
        const lists = await List.find({board_id : board_id})
        const view = await Promise.all(
            lists.map(async (list) => {
                const cards = await Card.find({ list_id: list._id });
                const mappedCards = cards.map(card =>({
                    _id: card._id,
                    title: card.title,
                    content: card.content
                })) 
                return {
                    title: list.title,
                    _id: list._id,
                    cards: mappedCards};
            })
        );
        res.status(200).json({ 
            message: 'View fetched successfully',
            view
    });
    } catch (error) {
        next(error);
    }
};

export const getNavbar = async (req, res, next) => {
    try {
        const user_id = req.params.id;
        const user = await User.findById(user_id)
        const mappedUser = {
            email: user.email,
            avatar: user.avatar,
            name: user.name,
            city: user.city,
            age: user.age
        }
        const boards = await Board.find({user_id : user._id})

        const mappedBoards = boards.map(board =>({
            _id: board._id,
            title: board.title
        }) 
    )
        res.status(200).json({ 
            message: 'View fetched successfully',
            user: mappedUser, 
            boards: mappedBoards
        });
    } catch (error) {
        next(error);
    }
};