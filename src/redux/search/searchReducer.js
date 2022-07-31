import { SEARCHDATA } from "./action";


const searchReducer = (store = {search : {}},{type,payload})=>{
  switch (type) {
    case SEARCHDATA :
        return{
            search : payload, 
        }
        default : {
            return store;
        }
  }
}

export default searchReducer;