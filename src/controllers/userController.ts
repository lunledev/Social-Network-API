import User from "../models/User.js";
import { Request, Response } from "express";




//Get all Users.
export const getAllUsers = async (_req: Request, res: Response) =>{
    try{
        const users = await User.find({}).select('-password');
        res.json(users);
    }
    catch(err){
        res.status(500).json(err);

    }

};


//get single user by its _id and populated thought and friend data
export const getSingleUser = async (req: Request, res: Response) => {
    try{
        const user = await User.findOne({_id: req.params.userId})
        .select('-__v')
        .populate('thoughts')
        .populate('friends');

        if(!user){
            res.status(404).json({message: 'Something went wrong with user!'});

        }

    }
    catch(err)
    {
        

    }
    
}