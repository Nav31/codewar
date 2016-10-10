const sort = items => {
    let isSorted = false, count = 0;
    for(let i = 0; i < items.length - 1; i++) {
        if(items[i] > items[i+1]) {
            let temp = items[i+1];
            items[i+1] = items[i];
            items[i] = temp;
        }
    }
    for(let i = 0; i < items.length - 1; i++) {
        if(items[i] > items[i+1]) {
            count++;
            break;
        } else isSorted = true;
    }
    if(isSorted === true && count === 0) return items;
    else return sort(items);
}