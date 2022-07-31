import { TOGGLEAUTH } from "./action";

let auth = false
const authReducer = (store = {auth : {status : false}},{type,payload})=>{
    switch (type){
        case TOGGLEAUTH :
            return{
                auth : auth.status ? {status : false} :  {status : true,...payload}, 
            }
        default :
        return store;
    }
}

export default authReducer;