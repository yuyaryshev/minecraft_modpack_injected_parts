ServerEvents.recipes(event => {
	event.recipes.create.mixing(
		{
          "fluid": "create:potion",
          "nbt": '{Potion: "yyitems:activation_liquid_common"}',
          "amount": 1000
        },
		[
			"yyitems:magic_stone_activator_0",
			Fluid.of("minecraft:water", 1000)
		]
	);

	event.recipes.create.mixing(
		{
          "fluid": "create:potion",
          "nbt": '{Potion: "yyitems:activation_liquid_un_common"}',
          "amount": 1000
        },
		[
			"yyitems:magic_stone_activator_1",
			Fluid.of("minecraft:water", 1000)
		]
	);

	event.recipes.create.mixing(
		{
          "fluid": "create:potion",
          "nbt": '{Potion: "yyitems:activation_liquid_rare"}',
          "amount": 1000
        },
		[
			"yyitems:magic_stone_activator_2",
			Fluid.of("minecraft:water", 1000),
			Fluid.of("manaliquidizer:mana_fluid", 10)
		]
	);

	event.recipes.create.mixing(
		{
          "fluid": "create:potion",
          "nbt": '{Potion: "yyitems:activation_liquid_epic"}',
          "amount": 1000
        },
		[
			"yyitems:magic_stone_activator_3",
			Fluid.of("minecraft:water", 1000),
			Fluid.of("manaliquidizer:mana_fluid", 100)
		]
	).heated();

	event.recipes.create.mixing(
		{
          "fluid": "create:potion",
          "nbt": '{Potion: "yyitems:activation_liquid_legendary"}',
          "amount": 1000
        },
		[
			"yyitems:magic_stone_activator_4",
			Fluid.of("manaliquidizer:mana_fluid", 1000)
		]
	).heated();

	event.recipes.create.mixing(
		{
          "fluid": "create:potion",
          "nbt": '{Potion: "yyitems:activation_liquid_mithic"}',
          "amount": 1000
        },
		[
			"yyitems:magic_stone_activator_5",
			Fluid.of("manaliquidizer:mana_fluid", 10000)
		]
	).superheated();
});

