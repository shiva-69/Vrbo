import { TOGGLEAUTH } from "./action";

let auth = false
const authReducer = (store = {auth : {}},{type,payload})=>{
    switch (type){
        case TOGGLEAUTH :
            return{
                auth : auth ? {} : payload, 
            }
        default :
        return store;
    }
}

export default authReducer;