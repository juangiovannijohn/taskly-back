import User from "../models/user.model.js";

export const getUsers = async(req, res, next) =>{
    try {

        const data = await User.find()
        console.log(data)
        if (!data) {
            return res.status(404).json({ message: 'User not found' });
        }

        const users = data.map(user =>({
            id: user._id,
            email: user.email,
            name: user.name,
            avatar: user.avatar,
            age: user.age,
            city: user.city
        }));

        res.status(200).json({ message: 'User fetched successfully', 
            users 
        });
        
    } catch (error) {
        next(error);
    }
}
export const getUser = async (req, res, next) => {
    try {
        const data = await User.findById(req.params.id);
        
        if (!data) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User fetched successfully', 
            user : {
                id: data._id, 
                email: data.email, 
                name: data.name, 
                avatar: data.avatar,
                age: data.age,
                city:data.city
            } 
        });
    } catch (error) {
        next(error);
    }
};

export const createUser = async (req, res, next) => {
    const {email,password,avatar,age,name,city} = req.body
    const newUser = {email,password,avatar,age,name,city}
    try {
        const user = await User.create(newUser)
        res.status(201).json({
             message: 'User created successfully',
             user: {email: user.email, name: user.name} 
            });
    } catch (error) {
        next(error);
    }
};

export const updateUser = async (req, res, next) => {
    try {
        const {name, age, avatar, city} = req.body
        const filter = { _id: req.params.id };
        const update = { name, age, avatar, city };

        const result = await User.findByIdAndUpdate(filter, update);

        res.status(200).json({ message: 'User updated successfully' , user : {
                id: result._id, 
                email: result.email, 
                name: result.name, 
                avatar: result.avatar,
                age: result.age,
                city:result.city
            }  });
    } catch (error) {
        next(error);
    }
};

export const deleteUser = async (req, res, next) => {
    try {
        const filter = { _id: req.params.id };

        const result = await User.findByIdAndDelete(filter);

        res.status(200).json({ message: 'User deleted successfully' , user : {
                id: result._id, 
                email: result.email
            }  });
    } catch (error) {
        next(error);
    }
};

export const login = (req, res, next)=>{
    try {
        return res.status(200).json({
          message: "LOGGED IN",
          token: req.token
        })
    } catch (error) {
        next(error)
    }
}
