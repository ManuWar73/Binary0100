let binaryItems = require("content/items")

const test = extend(Wall, "test", {
	health: 9999,
	setStats(){
		stats.add(Stat.damage, "what? i'm a wall i can't damage other units.")
	},
	chanceDeflect: 1,
	buildVisibility: BuildVisibility.shown
})
test.requirements(Category.defense, ItemStack.with(binaryItems.zero))
exports.test = test
