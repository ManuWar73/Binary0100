const binaryItems = require('content/items');

export const test = extend(Wall, "test", {
	health: 9999999,
	chanceDeflect: 1
});
test.requirements(Category.defense, ItemStack.with(binaryItems.zero, 5));

/*module.exports = {
	 test: test
};*/
