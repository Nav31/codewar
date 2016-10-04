const locate = (arr, value) => {
    const flatten = (...args) => args.reduce((a, b) => a.concat(Array.isArray(b) ? flatten(...b) : b), []);
    const flattenedArr = flatten(arr);
    return flattenedArr.filter(elem => flattenedArr.indexOf(value) > -1).length > 0 ? true : false;
}