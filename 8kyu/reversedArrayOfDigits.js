// 348597 => [7,9,5,8,4,3]

var digitize = n => n.toString().split("").map(ele => parseInt(ele)).reverse();