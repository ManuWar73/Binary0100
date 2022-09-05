const binaryItems = require('content/items');

const defense = [ 
	extend(Wall, "test", {
		health: 9999999,
		chanceDeflect: 1,
		requirements: ItemStack.with(binaryItems.zero, 5)),
	})
];

for(let i = 0;i<defense.length;i++){
	defense[i].buildVisibility = BuildVisibility.shown;
	defense[i].category = Category.defense;
}

module.exports = {
	defense[0]: [`${defense[0].name}`]
};
