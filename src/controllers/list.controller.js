export const getLists = (req, res, next) => {
    try {
        // Lógica para obtener un usuario
        res.status(200).json({ message: 'List fetched successfully' });
    } catch (error) {
        next(error);
    }
};

export const getList = (req, res, next) => {
    try {
        // Lógica para obtener un usuario
        res.status(200).json({ message: 'List fetched successfully' });
    } catch (error) {
        next(error);
    }
};

export const createList = (req, res, next) => {
    try {
        // Lógica para crear un usuario
        res.status(201).json({ message: 'List created successfully' });
    } catch (error) {
        next(error);
    }
};

export const updateList = (req, res, next) => {
    try {
        // Lógica para crear un usuario
        res.status(201).json({ message: 'List updated successfully' });
    } catch (error) {
        next(error);
    }
};

export const deleteList = (req, res, next) => {
    try {
        // Lógica para crear un usuario
        res.status(201).json({ message: 'List deleted successfully' });
    } catch (error) {
        next(error);
    }
};
