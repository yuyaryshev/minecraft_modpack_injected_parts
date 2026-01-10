// yy_mmorpg_automation.js

 
const rarityNames2 = {
    0: "common",
    1: "uncommon",
    2: "rare",
    3: "epic",
    4: "legendary",
    5: "mythic"
};

const familyNames = [
	'weapon',
	'jewelry',
	'offhand',
	'armor',
];


ServerEvents.recipes(event => {	
	//event.shapeless("yyitems:magic_stone_activator_0", ["create:copper_nugget", "yyitems:andesite_nugget"]);

	event.replaceInput({output:"mmorpg:soul_extractor/common"}, "mmorpg:stone/0", "yyitems:magic_stone_activator_0");
	event.replaceInput({output:"mmorpg:soul_extractor/uncommon"}, "mmorpg:stone/1", "yyitems:magic_stone_activator_1");
	event.replaceInput({output:"mmorpg:soul_extractor/rare"}, "mmorpg:stone/2", "yyitems:magic_stone_activator_2");
	event.replaceInput({output:"mmorpg:soul_extractor/epic"}, "mmorpg:stone/3", "yyitems:magic_stone_activator_3");
	event.replaceInput({output:"mmorpg:soul_extractor/legendary"}, "mmorpg:stone/4", "yyitems:magic_stone_activator_4");
	event.replaceInput({output:"mmorpg:soul_extractor/mythic"}, "mmorpg:stone/5", "yyitems:magic_stone_activator_5");


	for(let rarityNum=0; rarityNum< Object.keys(rarityNames2).length; rarityNum++){
		const rarityName = rarityNames2[rarityNum];			  
		for(let familyName of familyNames) {
			event.shapeless(`mmorpg:stat_soul/family/${familyName}/${rarityName}`, [
				 `yyitems:magic_stone_activator_${rarityNum}`,`yyitems:magic_stone_activator_${rarityNum}`,`yyitems:magic_stone_activator_${rarityNum}`,
				 `yyitems:magic_stone_activator_${rarityNum}`,`yyitems:magic_stone_activator_${rarityNum}`,`yyitems:magic_stone_activator_${rarityNum}`,
				 `yyitems:magic_stone_activator_${rarityNum}`,`yyitems:magic_stone_activator_${rarityNum}`,`yyitems:magic_stone_activator_${rarityNum}`,
			]);
		}
	}


//	event.custom({
//		type: "create:deploying",
//		ingredients: [
//			{ item: "minecraft:sand" },
//			{ item: "yyitems:glass_bottle_form" }
//		],
//		keepHeldItem: true,
//		results: [
//			{ item: "yyitems:glass_bottle_unfired" }
//		]
//	});
});
