const zero = extend(Item, "zero", Color.valueOf("000000"), {
	cost: 0.2,
	hardness: 2,
	alwaysUnlocked: true
});

const one = extend(Item, "one", Color.valueOf("000000"), {
	cost: 0.2,
	hardness: 2,
	alwaysUnlocked: true
});

module.exports = {
	zero,
	one
};
