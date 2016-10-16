const cakes = (recipe, available) => {
    let limit = Infinity;
    for(let key in recipe) {
        if(available[key] === undefined) return 0;
        else {
            let ingredientAmount = Math.floor(available[key] / recipe[key]);
            if(ingredientAmount < limit) limit = ingredientAmount; 
        }
    }
    return limit;
}