import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req, res)=>{
    try{
        const {username, email, password} = req.body;
        const user = await User.findOne({email})
        if(user){
            return res.status(200).json({message: "User already exists."});
        }
        const hashPassword = await bcryptjs.hash(password, 10);
        const createdUser = new User({
            username: username,
            email: email,
            password: hashPassword
        });
        await createdUser.save();
        res.status(201).json({message: "user created successfully",
            user: {
                id: createdUser._id,
                username: createdUser.username,
                email: createdUser.email,
                password: createdUser.password
            }
        })
    }
    catch(error){
        console.log("error" + error.message);
        res.status(400).json({message: "Internal server error"});

    }
}

export const login =  async (req, res)=>{
    try{
        console.log(req.body)
        const {email, password} = req.body;
        const user = await User.findOne({email});
        const isMatch = await bcryptjs.compare(password, user.password);
        if(!user || !isMatch){
            return res.status(400).json({
                message: "Invalid username and password"
            })
        }else{
            res.status(200).json({message: "Login successfull",
                user:{
                    _id: user._id,
                    username: user.username,
                    email: user.email
                }
            }
            )
        }
    }
    catch(error){
        console.log(error)
    }
}