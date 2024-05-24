function formatCategoriesArray(categories){
    const array = []

    categories.map(id => array.push({ id }))

    console.log(array);
}

formatCategoriesArray([1, 2, 3])