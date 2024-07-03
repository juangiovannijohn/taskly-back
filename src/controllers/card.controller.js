export const getCards = (req, res, next) => {
    try {
        // Lógica para obtener un usuario
        res.status(200).json({ message: 'Card fetched successfully' });
    } catch (error) {
        next(error);
    }
};

export const getCard = (req, res, next) => {
    try {
        // Lógica para obtener un usuario
        res.status(200).json({ message: 'Card fetched successfully' });
    } catch (error) {
        next(error);
    }
};

export const createCard = (req, res, next) => {
    try {
        // Lógica para crear un usuario
        res.status(201).json({ message: 'Card created successfully' });
    } catch (error) {
        next(error);
    }
};

export const updateCard = (req, res, next) => {
    try {
        // Lógica para crear un usuario
        res.status(201).json({ message: 'Card updated successfully' });
    } catch (error) {
        next(error);
    }
};

export const deleteCard = (req, res, next) => {
    try {
        // Lógica para crear un usuario
        res.status(201).json({ message: 'Card deleted successfully' });
    } catch (error) {
        next(error);
    }
};
