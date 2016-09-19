// cant use .reverse();
const rev = xs => xs.reduceRight((a,b) => a.concat(b), []);