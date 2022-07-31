export const TOGGLEAUTH = "TOGGLEAUTH";

const toggleAuth = (payload) =>{
    return {
        type : TOGGLEAUTH,
        payload,
    }
}

export default toggleAuth;