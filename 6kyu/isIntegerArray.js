const isIntArray = arr => (Array.isArray(arr)) ? arr.every(elem => Number.isInteger(elem)) : false;
