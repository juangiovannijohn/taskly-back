export const getUser = (req, res, next) => {
    try {
        // Lógica para obtener un usuario
        res.status(200).json({ message: 'User fetched successfully' });
    } catch (error) {
        next(error);
    }
};

export const createUser = (req, res, next) => {
    try {
        // Lógica para crear un usuario
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        next(error);
    }
};

export const updateUser = (req, res, next) => {
    try {
        // Lógica para crear un usuario
        res.status(201).json({ message: 'User updated successfully' });
    } catch (error) {
        next(error);
    }
};

export const deleteUser = (req, res, next) => {
    try {
        // Lógica para crear un usuario
        res.status(201).json({ message: 'User deleted successfully' });
    } catch (error) {
        next(error);
    }
};
