let state = 0
export function  counterReducer(state = 0, action) {
    switch(action.type){
        case "MINUS":
            return state - 1
        case "ADD":
            return  state + 2
        default:
            state
    }
     
}