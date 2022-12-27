export const employeReducer = (state = {
    employe: []
}, action) => {
    switch (action.type) {
        case "ADDEMPLOYE":
            return {
                ...state,
                employe: action.payload
            }
            default:
                return state
    }
 return state
}