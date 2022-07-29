const UserModel = require("../Database/Users");
const jwt = require("jsonwebtoken");
const {SECRET} = require("../Constants")

const RegisterUser  = async (req, res,next) => {
    const {user} = req.body;

    const alreadyRegistered = await UserModel.findOne({email : user.email});
    if(alreadyRegistered){
        return res.status(400).send({
            error: "User already exists"
        })
    }else{
        UserModel.create(user, (err, result) => {
            if(err){
                return res.status(424).send({
                    error: "Can't create User"
                })
                
            }
            return res.status(201).send(result);
        })

        
    }
}


const Login = async (req, res, send) => {
    const {email, password} = req.body;

    const existingUser = await UserModel.findOne({email: email});

    if(existingUser){
        if(existingUser.password == password){
            let encryptedToken = jwt.sign({
                id: existingUser._id,
                email: existingUser.email,
                password: existingUser.password
            }, SECRET);
            return res.status(200).send({
                token: encryptedToken
            })
        }
        else{
            return res.status(400).send({
                error : "Wrong Password"
            })
        }
    }
    else{
        return res.status(400).send({
            error: "You aren't registered"
        })
    }

    

}


module.exports = {
    RegisterUser,
    Login,

}