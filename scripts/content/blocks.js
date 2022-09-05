const binaryItems = require('content/items');

const defense = [ 
	extend(Wall, "the-what", {
		health: 20000
	})
];

for(let i = 0;i<defense.length;i++){
	defense[i].buildVisibility = BuildVisibility.shown;
	defense[i].category = Category.defense;
};

module.exports = {
	defense[0]: [`${defense[0].name}`]
};
