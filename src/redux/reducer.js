function InitialState(){
    return {
        data:[],
        loaded:false
    }
}

export const Reducer=(state=InitialState(),actions)=>{
    switch(actions.type){
        case "SET_DATA":
            return {...state,data:actions.payload,loaded:true}
        case "SET_LOADED_FALSE":
            return {
                ...state,loaded:false
            }
        default:
            return state
    }
}