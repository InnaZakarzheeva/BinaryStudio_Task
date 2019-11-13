let nextId = 0;
export const addRecipe = (name, recipe) => {
    return {
        type: 'add',
        id: nextId++,
        date: new Date(),
        name: name,
        textRecipe: recipe
    }
}

export const editRecipe = (text) => {
    return {
        type: 'edit',
        textRecipe: text
    }
}

export const deleteRecipe = (id) => {
    return {
        type: 'delete',
        id: id
    }
}