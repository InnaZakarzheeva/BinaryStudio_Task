const r = (state, action) => {
    switch(action.type) {
        case 'add':
            return {
                id: action.id,
                date: action.date,
                name: action.name,
                textRecipe: action.textRecipe
            }
        case 'edit':
            return {
                id: action.id,
                textRecipe: action.textRecipe
            }
        case 'delete': 
            if(state.id !== action.id){
                return state;
            }
            return Object.assign({}, state)
        default:
            return state;
    }
}

const recipe = (state = [], action) => {
    switch(action.type){
        case 'add':
            return[
                ...state,
                r(undefined, action)
            ]
        case 'edit':
            return [
                ...state
            ]
        case 'delete':
            return state.filter((recipeItem) => recipeItem.id !== action.id);
        default:
            return state;
    }
}
export default recipe;