const binaryItems = require('content/items');

/* boilerplate
const = extend(Wall, "", {
});
.requirements(Category.defense, ItemStack.with(binaryItems.zero, 5));
exports. = ;
*/

const test = extend(Wall, "test", {
	health: 9999999,
	chanceDeflect: 1
});

test.requirements(Category.defense, ItemStack.with(binaryItems.zero, 5));
exports.test = test;
