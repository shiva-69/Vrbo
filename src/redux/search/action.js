export const SEARCHDATA = "SEARCHDATA";

const searchData = (payload)=>{
    return {
        type : SEARCHDATA,
        payload
    }
}

export default searchData;