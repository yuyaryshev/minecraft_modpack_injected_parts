// yy_replace_iron_with_andesite.js
// Converts iron ingredients in selected recipes to andesite equivalents

let woodTypes = ["acacia", "birch", "crimson", "dark_oak", "jungle", "oak", "spruce", "warped"];
var incomplete_item;

ServerEvents.recipes(event => {	
	event.shaped("minecraft:wooden_axe", [
            'WW',
            'WS',
        ],
        {
            S:{item:'minecraft:stick'},
            W:{tag:'minecraft:planks'}
        }
    );
	event.shaped("minecraft:wooden_pickaxe", [
            'WW',
            'WS',
        ],
        {
            S:{item:'minecraft:stick'},
            W:{tag:'minecraft:planks'}
        }
    );
	event.shaped("minecraft:wooden_shovel", [
            'WW',
            'WS',
        ],
        {
            S:{item:'minecraft:stick'},
            W:{tag:'minecraft:planks'}
        }
    );
	event.shaped("minecraft:wooden_sword", [
            'WW',
            'WS',
        ],
        {
            S:{item:'minecraft:stick'},
            W:{tag:'minecraft:planks'}
        }
    );
	event.shaped("minecraft:wooden_hoe", [
            'WW',
            'WS',
        ],
        {
            S:{item:'minecraft:stick'},
            W:{tag:'minecraft:planks'}
        }
    );
	
	event.shaped("minecraft:compass", [
            ' A ',
            'ARA',
            ' A ',
        ],
        {
            A:{item:'create:andesite_alloy'},
            R:{item:'minecraft:redstone'}
        }
    );


	  event.custom(
		{
		  "type": "minecraft:crafting_shaped",
		  "category": "equipment",
		  "key": {
			"a": {
			  "tag": "forge:ingots/copper"
			},
			"b": {
			  "item": "copper_bucket_mod:copper_bucket"
			}
		  },
		  "pattern": [
			"a a",
			"aba",
			"aaa"
		  ],
		  "result": {
			"item": "dew_drop_watering_cans:copper_watering_can"
		  },
		  "show_notification": true
		}
	  );

    event.smelting(`create:andesite_alloy`,`yyitems:raw_andesite_alloy_powder`);

	event.shapeless("minecraft:grass_block", ["minecraft:dirt", "minecraft:grass"]);
	event.shapeless("yyitems:glass_bottle_form_unfired", ["minecraft:clay_ball", "minecraft:glass_bottle"]).keepIngredient("minecraft:glass_bottle");
	event.smelting("yyitems:glass_bottle_form", "yyitems:glass_bottle_form_unfired");

	event.custom({
		type: "create:deploying",
		ingredients: [
			{ item: "minecraft:sand" },
			{ item: "yyitems:glass_bottle_form" }
		],
		keepHeldItem: true,
		results: [
			{ item: "yyitems:glass_bottle_unfired" }
		]
	});

	event.custom({
		type: "create:deploying",
		ingredients: [
			{ item: "minecraft:red_sand" },
			{ item: "yyitems:glass_bottle_form" }
		],
		keepHeldItem: true,
		results: [
			{ item: "yyitems:glass_bottle_unfired" }
		]
	});

	event.smelting("minecraft:glass_bottle", "yyitems:glass_bottle_unfired");

	event.recipes.create.compacting("yyitems:wooden_frame", [
		"minecraft:stick",
		"minecraft:stick",
		"minecraft:stick",
		"minecraft:stick"
	]);

	event.recipes.create.compacting("createsifter:string_mesh", [
		"yyitems:wooden_frame",
		"minecraft:string"
	]);
	event.recipes.create.compacting("createsifter:andesite_mesh", [
		"yyitems:wooden_frame",
		"create:andesite_alloy"
	]);
	event.recipes.create.compacting("createsifter:zinc_mesh", [
		"yyitems:wooden_frame",
		"create:zinc_ingot"
	]);
	event.recipes.create.compacting("createsifter:brass_mesh", [
		"yyitems:wooden_frame",
		"create:brass_ingot"
	]);
	
	event.shaped("flopper:flopper", [
            'SBS',
            ' S ',
            '   '
        ],
        {
            S:'yyitems:andesite_sheet',
            B:'copper_bucket_mod:copper_bucket'
        }
    );
	
	event.shaped("flopper:flopper", [
            'SBS',
            ' S ',
            '   '
        ],
        {
            S:'yyitems:andesite_sheet',
            B:'ceramics:empty_clay_bucket'
        }
    );
	
	event.shaped("flopper:flopper", [
            'SBS',
            ' S ',
            '   '
        ],
        {
            S:'yyitems:andesite_sheet',
            B:'woodenbucket:wooden_bucket'
        }
    );
	
	incomplete_item = "yyitems:incomplete_gearbox";
 
	  event.custom({
		type: "create:sequenced_assembly",
		ingredient: {
		  item: "create:andesite_casing"
		},
		loops: 1,
		results: [
		  {
			item: "create:gearbox"
		  }
		],
		sequence: [
		  {
			type: "create:deploying",
			ingredients: [
			  { item: incomplete_item },
			  { item: "create:cogwheel" }
			],
			results: [
			  { item: incomplete_item }
			]
		  },
		  {
			type: "create:deploying",
			ingredients: [
			  { item: incomplete_item },
			  { item: "create:cogwheel" }
			],
			results: [
			  { item: incomplete_item }
			]
		  },
		  {
			type: "create:deploying",
			ingredients: [
			  { item: incomplete_item },
			  { item: "create:cogwheel" }
			],
			results: [
			  { item: incomplete_item }
			]
		  },
		  {
			type: "create:deploying",
			ingredients: [
			  { item: incomplete_item },
			  { item: "create:cogwheel" }
			],
			results: [
			  { item: incomplete_item }
			]
		  },
		  {
			type: "create:pressing",
			ingredients: [
			  { item: incomplete_item }
			],
			results: [
			  { item: incomplete_item }
			]
		  }
		],
		transitionalItem: {
		  item: incomplete_item
		}
	  });
 
 
	  incomplete_item = "yyitems:incomplete_brass_gearbox"; 
	  event.custom({
		type: "create:sequenced_assembly",
		ingredient: {
		  item: "create:brass_casing"
		},
		loops: 1,
		results: [
		  {
			item: "create_connected:brass_gearbox"
		  }
		],
		sequence: [
		  {
			type: "create:deploying",
			ingredients: [
			  { item: incomplete_item },
			  { item: "create:cogwheel" }
			],
			results: [
			  { item: incomplete_item }
			]
		  },
		  {
			type: "create:deploying",
			ingredients: [
			  { item: incomplete_item },
			  { item: "create:cogwheel" }
			],
			results: [
			  { item: incomplete_item }
			]
		  },
		  {
			type: "create:deploying",
			ingredients: [
			  { item: incomplete_item },
			  { item: "create:cogwheel" }
			],
			results: [
			  { item: incomplete_item }
			]
		  },
		  {
			type: "create:deploying",
			ingredients: [
			  { item: incomplete_item },
			  { item: "create:cogwheel" }
			],
			results: [
			  { item: incomplete_item }
			]
		  },
		  {
			type: "create:pressing",
			ingredients: [
			  { item: incomplete_item }
			],
			results: [
			  { item: incomplete_item }
			]
		  }
		],
		transitionalItem: {
		  item: incomplete_item
		}
	  });

	incomplete_item = "create:incomplete_precision_mechanism";
	event.custom({
	  type: "create:sequenced_assembly",
	  ingredient: {
		item: "create:golden_sheet"
	  },
	  loops: 1,
	  results: [
		{
		  item: "create:precision_mechanism"
		}
	  ],
	  sequence: [
		{
		  type: "create:deploying",
		  ingredients: [
			{ item: incomplete_item },
			{ item: "create:cogwheel" }
		  ],
		  results: [
			{ item: incomplete_item }
		  ]
		},
		{
		  type: "create:deploying",
		  ingredients: [
			{ item: incomplete_item },
			{ item: "create:large_cogwheel" }
		  ],
		  results: [
			{ item: incomplete_item }
		  ]
		},
		{
		  type: "create:deploying",
		  ingredients: [
			{ item: incomplete_item },
			{ item: "minecraft:iron_nugget" }
		  ],
		  results: [
			{ item: incomplete_item }
		  ]
		},
		{
		  type: "create:deploying",
		  ingredients: [
			{ item: incomplete_item },
			{ item: "create:electron_tube" }
		  ],
		  results: [
			{ item: incomplete_item }
		  ]
		},
		{
		  type: "create:pressing",
		  ingredients: [
			{ item: incomplete_item }
		  ],
		  results: [
			{ item: incomplete_item }
		  ]
		}
	  ],
	  transitionalItem: {
		item: incomplete_item
	  }
	});

	incomplete_item = "create_factory_logistics:incomplete_fluid_mechanism";
	event.custom({
	  type: "create:sequenced_assembly",
	  ingredient: {
		item: "create:copper_sheet"
	  },
	  loops: 3,
	  results: [
		{
		  item: "create_factory_logistics:fluid_mechanism",
		  chance: 250.0
		},
		{
		  item: "create:copper_sheet",
		  chance: 8.0
		},
		{
		  item: "create:andesite_alloy",
		  chance: 8.0
		},
		{
		  item: "create:cogwheel",
		  chance: 5.0
		},
		{
		  item: "minecraft:gold_nugget",
		  chance: 2.0
		},
		{
		  item: "create:shaft",
		  chance: 2.0
		},
		{
		  item: "create:crushed_raw_copper",
		  chance: 2.0
		},
		{
		  item: "create:mechanical_pump"
		}
	  ],
	  sequence: [
		{
		  type: "create:deploying",
		  ingredients: [
			{ item: incomplete_item },
			{ item: "create:cogwheel" }
		  ],
		  results: [
			{ item: incomplete_item }
		  ]
		},
		{
		  type: "create:deploying",
		  ingredients: [
			{ item: incomplete_item },
			{ item: "create:fluid_pipe" }
		  ],
		  results: [
			{ item: incomplete_item }
		  ]
		},
		{
		  type: "create:deploying",
		  ingredients: [
			{ item: incomplete_item },
			{ item: "minecraft:gold_nugget" }
		  ],
		  results: [
			{ item: incomplete_item }
		  ]
		}
	  ],
	  transitionalItem: {
		item: incomplete_item
	  }
	});

	  event.custom(
		{
		  "type": "create_new_age:energising",
		  "energyNeeded": 2000,
		  "ingredients": [
			{
			  "item": "create_new_age_accumulators:lithium_ingot"
			}
		  ],
		  "results": [
			{
			  "item": "create_new_age_accumulators:ionic_lithium"
			}
		  ]
		}
	  );

	event.recipes.create.milling(
		'createmetallurgy:copper_dust',
		'minecraft:copper_ingot'
	);
	
	event.replaceInput(
		{ output: 'create_new_age_accumulators:nickel_dust' },
		'minecraft:raw_copper',
		'createmetallurgy:copper_dust'
	);
	
  
	event.recipes.create.compacting(['minecraft:andesite'], [Fluid.water(100), 'minecraft:cobblestone']);
	event.recipes.create.compacting(['minecraft:andesite'], [Fluid.water(100), 'minecraft:stone']);
	event.recipes.create.mixing(['minecraft:dirt'], [Fluid.water(200), 'minecraft:gravel']);
	event.recipes.create.mixing(['minecraft:clay_ball','minecraft:clay_ball','minecraft:clay_ball','minecraft:clay_ball'], [Fluid.water(200), 'minecraft:dirt']);

	
	event.remove({ output: 'create_new_age:thorium'});
	event.shapeless("minecraft:copper_block", ['minecraft:cut_copper']);
	
	event.recipes.create.mixing(['create_new_age:radioactive_thorium','create_new_age:thorium'], 
		['create_new_age:radioactive_thorium','minecraft:cobblestone',Fluid.water(1000)]);
	
	event.replaceOutput(
		{ 
			output: 'create_new_age:radioactive_thorium'
		},
		'minecraft:iron_nugget',
		'yyitems:andesite_nugget',
	);
	
	
	event.replaceInput({ mod:'create', id: /goggles/ }, "create:golden_sheet", "create:copper_sheet");
    event.replaceInput({ mod:'create', id: /wrench/ }, "create:golden_sheet", "create:copper_sheet");
    event.replaceInput({ output: 'create_refilling_boxes:andesite_refilling_box' }, "create:golden_sheet", "yyitems:andesite_sheet");

    event.replaceInput({ output: 'toms_storage:ts.storage_terminal' }, "minecraft:glowstone", "yyitems:andesite_sheet");
    event.replaceInput({ output: 'toms_storage:ts.storage_terminal' }, "minecraft:comparator", "create:andesite_alloy");
    event.replaceInput({ output: 'toms_storage:ts.wireless_terminal' },"minecraft:glowstone", "yyitems:andesite_sheet");
    event.replaceInput({ output: 'toms_storage:ts.wireless_terminal' },"minecraft:comparator", "create:andesite_alloy");
    event.replaceInput({ output: 'toms_storage:ts.wireless_terminal' },"minecraft:ender_pearl", "yyitems:andesite_sheet");
    //event.replaceInput({ output: 'toms_storage:ts.crafting_terminal' }, "minecraft:diamond", "#minecraft:planks");
    event.replaceInput({ output: 'create_new_age:basic_motor' }, "minecraft:iron_nugget", "yyitems:andesite_nugget");
    event.replaceInput({ output: 'minecraft:stonecutter' }, "minecraft:iron_ingot", "yyitems:andesite_sheet");

    // Cheaper wood automation
    event.replaceInput({ id: "create:crafting/kinetics/brass_hand" }, "create:brass_sheet", "create:copper_sheet");
    event.replaceInput({ output: "create:deployer" }, "create:electron_tube", "create:cogwheel");

    event.replaceInput({ output: "cookingforblockheads:toaster" }, "minecraft:iron_trapdoor", "yyitems:andesite_sheet");
    event.remove({ output: "cookingforblockheads:fridge" });
    event.shaped("cookingforblockheads:fridge", [
            'CAA',
            ' AA',
            ' AA'
        ],
        {
            A:'yyitems:andesite_sheet',
            C:'minecraft:chest'
        }
    );



    event.blasting("minecraft:coal", "minecraft:charcoal");
	
    event.recipes.create.pressing('2x create:belt_connector',"minecraft:dried_kelp_block");
    
	woodTypes.map((woodType) =>
        event.custom({
            type: "create:cutting",
            ingredients: [
                {
                    item: `minecraft:${woodType}_planks`,
                },
            ],
            results: [
                {
                    item: `minecraft:${woodType}_button`,
                    count: 2,
                },
            ],
            processingTime: 100,
        }),
    );


 
  event.custom(
    {
      "type": "create:cutting",
      "ingredients": [
        {
          "item": "ceramics:empty_clay_bucket"
        },
        {
          "tag": "forge:plates/iron"
        }
      ],
      "results": [
        {
          "item": "createdieselgenerators:mold",
          "nbt": {
            "Mold": "createdieselgenerators:bowl"
          }
        }
      ]
    }
  );	 
//	event.stonecutting({ item: 'createdieselgenerators:mold', "nbt": '{Mold:"createdieselgenerators:bowl"}', count: 1, }, ['create:iron_sheet']);
//	event.stonecutting({ item: 'createdieselgenerators:mold', "nbt": '{Mold:"createdieselgenerators:lines"}', count: 1, }, ['create:iron_sheet']);
//	event.stonecutting({ item: 'createdieselgenerators:mold', "nbt": '{Mold:"createdieselgenerators:chain"}', count: 1, }, ['create:iron_sheet']);
//	event.stonecutting({ item: 'createdieselgenerators:mold', "nbt": '{Mold:"createdieselgenerators:bar"}', count: 1, }, ['create:iron_sheet']);
	event.stonecutting({ item: 'ratatouille:cake_mold',	count: 1, }, ['create:iron_sheet']);
	event.stonecutting({ item: 'ratatouille:cake_mold', count: 1, }, ['create:iron_sheet']);
	event.stonecutting({ item: 'ratatouille:popsicle_mold',	count: 1, }, ['create:iron_sheet']);
	event.stonecutting({ item: 'ratatouille:chocolate_mold', count: 1, }, ['create:iron_sheet']);
	});

LootJS.modifiers((event) => {
    event
        .addBlockLootModifier(`minecraft:coal_ore`)
        .addLoot("yyitems:raw_andesite_alloy_powder")
		.addLoot("yyitems:raw_andesite_alloy_powder");

    event
        .addBlockLootModifier(`minecraft:deepslate_coal_ore`)
        .addLoot("yyitems:raw_andesite_alloy_powder")
		.addLoot("yyitems:raw_andesite_alloy_powder");

    event
        .addBlockLootModifier(`deeperdarker:gloomslate_coal_ore`)
        .addLoot("yyitems:raw_andesite_alloy_powder")
		.addLoot("yyitems:raw_andesite_alloy_powder");

    event
        .addBlockLootModifier(`undergarden:depthrock_coal_ore`)
        .addLoot("yyitems:raw_andesite_alloy_powder")
		.addLoot("yyitems:raw_andesite_alloy_powder");

    event
        .addBlockLootModifier(`deeperdarker:sculk_stone_coal_ore`)
        .addLoot("yyitems:raw_andesite_alloy_powder")
		.addLoot("yyitems:raw_andesite_alloy_powder");

    event
        .addBlockLootModifier(`undergarden:shiverstone_coal_ore`)
        .addLoot("yyitems:raw_andesite_alloy_powder")
		.addLoot("yyitems:raw_andesite_alloy_powder");
});
