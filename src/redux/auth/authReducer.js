import { TOGGLEAUTH } from "./action";

let auth = false
const authReducer = (store = {auth},{type})=>{
    switch (type){
        case TOGGLEAUTH :
            return{
                auth : auth ? false : true, 
            }
        default :
        return store;
    }
}

export default authReducer;