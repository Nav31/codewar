function toHex(n) {
	if(n > 255) return "FF"
    if(n < 0) return "00";
    let hex = n.toString(16);
    return hex.length === 1 ? "0" + hex.toUpperCase() : hex.toUpperCase();
}
const rgb = (r,g,b) => toHex(r) + toHex(g) + toHex(b);