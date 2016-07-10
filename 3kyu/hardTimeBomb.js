var cut = Object.keys(global).filter(i => (typeof global[i] === 'number'))[0];

Bomb.CutTheWire(global[cut]);