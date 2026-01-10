ServerEvents.recipes(event => {
	event.remove({ output: "mmorpg:stone/1", input: "mmorpg:stone/0" });
	event.remove({ output: "mmorpg:stone/2", input: "mmorpg:stone/1" });
	event.remove({ output: "mmorpg:stone/3", input: "mmorpg:stone/2" });
	event.remove({ output: "mmorpg:stone/4", input: "mmorpg:stone/3" });
	event.remove({ output: "mmorpg:stone/5", input: "mmorpg:stone/4" });

	event.remove({ output: "mmorpg:stone/0", input: "mmorpg:stone/1" });
	event.remove({ output: "mmorpg:stone/1", input: "mmorpg:stone/2" });
	event.remove({ output: "mmorpg:stone/2", input: "mmorpg:stone/3" });
	event.remove({ output: "mmorpg:stone/3", input: "mmorpg:stone/4" });
	event.remove({ output: "mmorpg:stone/4", input: "mmorpg:stone/5" });

	event.shapeless("yyitems:magic_stone_1", [
		"yyitems:magic_stone_0","yyitems:magic_stone_0","yyitems:magic_stone_0",
		"yyitems:magic_stone_0","yyitems:magic_stone_0","yyitems:magic_stone_0",
		"yyitems:magic_stone_0","yyitems:magic_stone_0","yyitems:magic_stone_0"
	]);
	event.shapeless("yyitems:magic_stone_2", [
		"yyitems:magic_stone_1","yyitems:magic_stone_1","yyitems:magic_stone_1",
		"yyitems:magic_stone_1","yyitems:magic_stone_1","yyitems:magic_stone_1",
		"yyitems:magic_stone_1","yyitems:magic_stone_1","yyitems:magic_stone_1"
	]);
	event.shapeless("yyitems:magic_stone_3", [
		"yyitems:magic_stone_2","yyitems:magic_stone_2","yyitems:magic_stone_2",
		"yyitems:magic_stone_2","yyitems:magic_stone_2","yyitems:magic_stone_2",
		"yyitems:magic_stone_2","yyitems:magic_stone_2","yyitems:magic_stone_2"
	]);
	event.shapeless("yyitems:magic_stone_4", [
		"yyitems:magic_stone_3","yyitems:magic_stone_3","yyitems:magic_stone_3",
		"yyitems:magic_stone_3","yyitems:magic_stone_3","yyitems:magic_stone_3",
		"yyitems:magic_stone_3","yyitems:magic_stone_3","yyitems:magic_stone_3"
	]);
	event.shapeless("yyitems:magic_stone_5", [
		"yyitems:magic_stone_4","yyitems:magic_stone_4","yyitems:magic_stone_4",
		"yyitems:magic_stone_4","yyitems:magic_stone_4","yyitems:magic_stone_4",
		"yyitems:magic_stone_4","yyitems:magic_stone_4","yyitems:magic_stone_4"
	]);

	event.shapeless("9x yyitems:magic_stone_0", "yyitems:magic_stone_1");
	event.shapeless("9x yyitems:magic_stone_1", "yyitems:magic_stone_2");
	event.shapeless("9x yyitems:magic_stone_2", "yyitems:magic_stone_3");
	event.shapeless("9x yyitems:magic_stone_3", "yyitems:magic_stone_4");
	event.shapeless("9x yyitems:magic_stone_4", "yyitems:magic_stone_5");

	event.custom({
		type: "create:deploying",
		ingredients: [
			{ item: "yyitems:andesite_ingot" },
			{ item: "create:copper_ingot" }
		],
		results: [
			{ item: "yyitems:magic_stone_activator_0" }
		]
	});

	event.custom({
		type: "create:deploying",
		ingredients: [
			{ item: "yyitems:magic_stone_activator_0" },
			{ item: "minecraft:iron_ingot" }
		],
		results: [
			{ item: "yyitems:magic_stone_activator_1" }
		]
	});

	event.custom({
		type: "create:deploying",
		ingredients: [
			{ item: "yyitems:magic_stone_activator_1" },
			{ item: "minecraft:gold_block" }
		],
		results: [
			{ item: "yyitems:magic_stone_activator_2" }
		]
	});

	event.custom({
		type: "create:deploying",
		ingredients: [
			{ item: "yyitems:magic_stone_activator_2" },
			{ item: "create:brass_block" }
		],
		results: [
			{ item: "yyitems:magic_stone_activator_3" }
		]
	});

	event.custom({
		type: "create:deploying",
		ingredients: [
			{ item: "yyitems:magic_stone_activator_3" },
			{ item: "minecraft:diamond" }
		],
		results: [
			{ item: "yyitems:magic_stone_activator_4" }
		]
	});

	event.custom({
		type: "create:deploying",
		ingredients: [
			{ item: "yyitems:magic_stone_activator_4" },
			{ item: "minecraft:diamond_block" }
		],
		results: [
			{ item: "yyitems:magic_stone_activator_5" }
		]
	});

	event.shapeless("1x mmorpg:stone/0", ["yyitems:magic_stone_0", "yyitems:magic_stone_activator_0"]);
	event.shapeless("2x mmorpg:stone/0", ["yyitems:magic_stone_0", "yyitems:magic_stone_activator_1"]);
	event.shapeless("3x mmorpg:stone/0", ["yyitems:magic_stone_0", "yyitems:magic_stone_activator_2"]);
	event.shapeless("4x mmorpg:stone/0", ["yyitems:magic_stone_0", "yyitems:magic_stone_activator_3"]);
	event.shapeless("32x mmorpg:stone/0", ["yyitems:magic_stone_0", "yyitems:magic_stone_activator_4"]);
	event.shapeless("128x mmorpg:stone/0", ["yyitems:magic_stone_0", "yyitems:magic_stone_activator_5"]);

	event.shapeless("1x mmorpg:stone/1", ["yyitems:magic_stone_1", "yyitems:magic_stone_activator_1"]);
	event.shapeless("2x mmorpg:stone/1", ["yyitems:magic_stone_1", "yyitems:magic_stone_activator_2"]);
	event.shapeless("4x mmorpg:stone/1", ["yyitems:magic_stone_1", "yyitems:magic_stone_activator_3"]);
	event.shapeless("16x mmorpg:stone/1", ["yyitems:magic_stone_1", "yyitems:magic_stone_activator_4"]);
	event.shapeless("64x mmorpg:stone/1", ["yyitems:magic_stone_1", "yyitems:magic_stone_activator_5"]);

	event.shapeless("1x mmorpg:stone/2", ["yyitems:magic_stone_2", "yyitems:magic_stone_activator_2"]);
	event.shapeless("2x mmorpg:stone/2", ["yyitems:magic_stone_2", "yyitems:magic_stone_activator_3"]);
	event.shapeless("8x mmorpg:stone/2", ["yyitems:magic_stone_2", "yyitems:magic_stone_activator_4"]);
	event.shapeless("32x mmorpg:stone/2", ["yyitems:magic_stone_2", "yyitems:magic_stone_activator_5"]);

	event.shapeless("1x mmorpg:stone/3", ["yyitems:magic_stone_3", "yyitems:magic_stone_activator_2"]);
	event.shapeless("2x mmorpg:stone/3", ["yyitems:magic_stone_3", "yyitems:magic_stone_activator_3"]);
	event.shapeless("4x mmorpg:stone/3", ["yyitems:magic_stone_3", "yyitems:magic_stone_activator_4"]);
	event.shapeless("16x mmorpg:stone/3", ["yyitems:magic_stone_3", "yyitems:magic_stone_activator_5"]);

	event.shapeless("1x mmorpg:stone/4", ["yyitems:magic_stone_4", "yyitems:magic_stone_activator_3"]);
	event.shapeless("2x mmorpg:stone/4", ["yyitems:magic_stone_4", "yyitems:magic_stone_activator_4"]);
	event.shapeless("8x mmorpg:stone/4", ["yyitems:magic_stone_4", "yyitems:magic_stone_activator_5"]);

	event.shapeless("1x mmorpg:stone/5", ["yyitems:magic_stone_5", "yyitems:magic_stone_activator_3"]);
	event.shapeless("2x mmorpg:stone/5", ["yyitems:magic_stone_5", "yyitems:magic_stone_activator_4"]);
	event.shapeless("4x mmorpg:stone/5", ["yyitems:magic_stone_5", "yyitems:magic_stone_activator_5"]);
});

LootJS.modifiers((event) => {
	event
		.addLootTableModifier(/.*/)
		.replaceLoot("mmorpg:stone/0", "yyitems:magic_stone_0");
	event
		.addLootTableModifier(/.*/)
		.replaceLoot("mmorpg:stone/1", "yyitems:magic_stone_1");
	event
		.addLootTableModifier(/.*/)
		.replaceLoot("mmorpg:stone/2", "yyitems:magic_stone_2");
	event
		.addLootTableModifier(/.*/)
		.replaceLoot("mmorpg:stone/3", "yyitems:magic_stone_3");
	event
		.addLootTableModifier(/.*/)
		.replaceLoot("mmorpg:stone/4", "yyitems:magic_stone_4");
	event
		.addLootTableModifier(/.*/)
		.replaceLoot("mmorpg:stone/5", "yyitems:magic_stone_5");
});
