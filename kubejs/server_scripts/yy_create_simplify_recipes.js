// yy_replace_iron_with_andesite.js
// Converts iron ingredients in selected recipes to andesite equivalents

let woodTypes = ["acacia", "birch", "crimson", "dark_oak", "jungle", "oak", "spruce", "warped"];
var incomplete_item;


function woodenToolsIn2x2(event) {
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
}
function cheaperDrawers(event) {
	// Cheaper drawers
    event.replaceInput({ id: "storagedrawers:obsidian_storage_upgrade" }, "minecraft:obsidian", "minecraft:copper_ingot");
    event.replaceInput({ id: "storagedrawers:iron_storage_upgrade" }, "minecraft:iron_ingot", "create:andesite_alloy");
    event.replaceInput({ id: "storagedrawers:gold_storage_upgrade" }, "minecraft:gold_ingot", "minecraft:iron_ingot");
    event.replaceInput({ id: "storagedrawers:diamond_storage_upgrade" }, "minecraft:diamond", "minecraft:gold_ingot");
    event.replaceInput({ id: "storagedrawers:emerald_storage_upgrade" }, "minecraft:emerald", "create:brass_ingot");
    event.replaceInput({ mod: "storagedrawers", id: /controller/ }, "minecraft:comparator", "minecraft:copper_ingot");
    event.replaceInput({ mod: "storagedrawers", id: /controller/ }, "minecraft:diamond", "minecraft:copper_ingot");
    event.replaceInput({ mod: "storagedrawers", id: /controller/ }, "minecraft:diamond", "minecraft:copper_ingot");
    event.replaceInput({ mod: "storagedrawers", id: /controller/ }, "minecraft:gold_ingot", "minecraft:copper_ingot");
    event.replaceInput({ mod: "storagedrawers", id: /compacting/ }, "minecraft:piston", "minecraft:cobblestone");
    event.replaceInput({ mod: "storagedrawers", id: /compacting/ }, "minecraft:stone", "minecraft:cobblestone");
    event.replaceInput({ mod: "storagedrawers", id: /compacting/ }, "minecraft:iron_ingot", "minecraft:cobblestone");
    event.replaceInput({ id: "storagedrawers:drawer_key" }, "minecraft:gold_ingot", "minecraft:copper_ingot");
    event.replaceInput({ id: "storagedrawers:drawer_key" }, "minecraft:gold_nugget", "create:copper_nugget");
    event.replaceInput({ id: "storagedrawers:quantify_key" }, "minecraft:writable_book", "minecraft:book");
    event.replaceInput({ id: "storagedrawers:concealment_key" }, "minecraft:ender_eye", "create:copper_nugget");
    event.replaceInput({ id: "reliquary:handgun" }, "minecraft:iron_ingot", "minecraft:netherite_block");
}


function andesiteAlloyFromBlock(event) {
	event.shapeless('9x create:andesite_alloy','create:andesite_alloy_block');
}


function wateringCanFix(event) {
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
}

function moreStrawRecipes(event) {
	event.recipes.create.milling('farmersdelight:straw', 'doggytalents:rice_wheat');
	event.recipes.create.milling('farmersdelight:straw', 'projectvibrantjourneys:reeds');
	event.recipes.create.milling('farmersdelight:straw', 'projectvibrantjourneys:cattail');
	event.recipes.create.milling('farmersdelight:straw', 'projectvibrantjourneys:sea_oats');	
}

function liquidCrystalFromAmetystFix(event) {
	event.custom({
		  "type": "create:mixing",
		  "heatRequirement": "heated",
		  "ingredients": [
			{
			  "item": "minecraft:amethyst_shard"
			},
			{
			  "item": "minecraft:sand"
			},
			{
			  "amount": 1000,
			  "fluid": "minecraft:lava"
			}
		  ],
		  "results": [
			{
			  "amount": 1000,
			  "fluid": "crystallized:liquid_crystal"
			}
		  ]
		}
	);
}


function simpleDirtWithGrassBlockRecipe(event) {
	event.shapeless("minecraft:grass_block", ["minecraft:dirt", "minecraft:grass"]);
}

function glassBottlePressingRecipes(event) {
	event.shapeless("yyitems:glass_bottle_form_unfired", ["minecraft:clay_ball", "minecraft:glass_bottle"]).keepIngredient("minecraft:glass_bottle");
	event.smelting("yyitems:glass_bottle_form", "yyitems:glass_bottle_form_unfired");
	event.smelting("minecraft:glass_bottle", "yyitems:glass_bottle_unfired");

	// TBD Should be molds instead!
		
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
}

function automationReadyFrameRecipes(event) {	
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
}

function andesiteAlloyFromPowder(event) {
	event.smelting(`create:andesite_alloy`,`yyitems:raw_andesite_alloy_powder`);
    event.blasting(`2x create:andesite_alloy`,`yyitems:raw_andesite_alloy_powder`);
}

function ironToAndesiteReplacements(event) {
	event.replaceInput({ output: 'create:track' }, {tag: "forge:nuggets/zinc"}, "yyitems:andesite_nugget");
	event.replaceInput({ output: 'createtransmission:transmission_chain' }, 'minecraft:chain', "yyitems:andesite_nugget");	
    event.replaceInput({ output: 'create_refilling_boxes:andesite_refilling_box' }, "create:golden_sheet", "yyitems:andesite_sheet");
    event.replaceInput({ output: 'toms_storage:ts.storage_terminal' }, "minecraft:glowstone", "yyitems:andesite_sheet");
    event.replaceInput({ output: 'toms_storage:ts.storage_terminal' }, "minecraft:comparator", "create:andesite_alloy");
    event.replaceInput({ output: 'toms_storage:ts.wireless_terminal' },"minecraft:glowstone", "yyitems:andesite_sheet");
    event.replaceInput({ output: 'toms_storage:ts.wireless_terminal' },"minecraft:comparator", "create:andesite_alloy");
    event.replaceInput({ output: 'toms_storage:ts.wireless_terminal' },"minecraft:ender_pearl", "yyitems:andesite_sheet");
    event.replaceInput({ output: 'create_new_age:basic_motor' }, "minecraft:iron_nugget", "yyitems:andesite_nugget");
    event.replaceInput({ output: 'minecraft:stonecutter' }, "minecraft:iron_ingot", "yyitems:andesite_sheet");
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
	
	event.shaped("minecraft:chain", [
            ' N ',
            ' A ',
            ' N ',
        ],
        {
            A:{item:'create:andesite_alloy'},
            N:{item:"yyitems:andesite_nugget"}
        }
    );

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
}

function sequenceAssemblies(event) {
		
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
	incomplete_item = "create:incomplete_track";	
	event.custom(
    {
      "type": "create:sequenced_assembly",
      "ingredient": {
        "tag": "create:sleepers"
      },
      "loops": 1,
      "results": [
        {
          "item": "create:track"
        }
      ],
      "sequence": [
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": incomplete_item,
            },
            [
              {
                "item": "yyitems:andesite_nugget"
              },
              {
                "item": "yyitems:andesite_nugget"
              }
            ]
          ],
          "results": [
            {
              "item": incomplete_item
            }
          ]
        },
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": incomplete_item
            },
            [
              {
                "item": "yyitems:andesite_nugget"
              },
              {
				"item": "yyitems:andesite_nugget"
              }
            ]
          ],
          "results": [
            {
              "item": incomplete_item
            }
          ]
        },
        {
          "type": "create:pressing",
          "ingredients": [
            {
              "item": incomplete_item
            }
          ],
          "results": [
            {
              "item": incomplete_item
            }
          ]
        }
      ],
      "transitionalItem": {
        "item": incomplete_item
      }
    }
  );
}

function createAccumulatorsFixex(event){
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
	event.replaceInput(
		{ output: 'create_new_age_accumulators:nickel_dust' },
		'minecraft:raw_copper',
		'createmetallurgy:copper_dust'
	);
}

function moldsFix(event) {
	event.custom({
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
	});	 
//	event.stonecutting({ item: 'createdieselgenerators:mold', "nbt": '{Mold:"createdieselgenerators:bowl"}', count: 1, }, ['create:iron_sheet']);
//	event.stonecutting({ item: 'createdieselgenerators:mold', "nbt": '{Mold:"createdieselgenerators:lines"}', count: 1, }, ['create:iron_sheet']);
//	event.stonecutting({ item: 'createdieselgenerators:mold', "nbt": '{Mold:"createdieselgenerators:chain"}', count: 1, }, ['create:iron_sheet']);
//	event.stonecutting({ item: 'createdieselgenerators:mold', "nbt": '{Mold:"createdieselgenerators:bar"}', count: 1, }, ['create:iron_sheet']);
	event.stonecutting({ item: 'ratatouille:cake_mold',	count: 1, }, ['create:iron_sheet']);
	event.stonecutting({ item: 'ratatouille:cake_mold', count: 1, }, ['create:iron_sheet']);
	event.stonecutting({ item: 'ratatouille:popsicle_mold',	count: 1, }, ['create:iron_sheet']);
	event.stonecutting({ item: 'ratatouille:chocolate_mold', count: 1, }, ['create:iron_sheet']);
}

ServerEvents.recipes(event => {	
	andesiteAlloyFromPowder(event);
	cheaperDrawers(event);
	woodenToolsIn2x2(event);
	wateringCanFix(event);
	andesiteAlloyFromBlock(event);
	moreStrawRecipes(event);
	liquidCrystalFromAmetystFix(event);
	simpleDirtWithGrassBlockRecipe(event);
	glassBottlePressingRecipes(event);
	automationReadyFrameRecipes(event);
	ironToAndesiteReplacements(event);
	sequenceAssemblies(event);
	createAccumulatorsFixex(event);
	moldsFix(event);

	event.recipes.create.milling('createmetallurgy:copper_dust', 'minecraft:copper_ingot' );
	event.replaceInput({ output: 'waystones:warp_scroll' }, 'minecraft:ender_pearl', 'minecraft:iron_nugget');	
	
	event.recipes.create.compacting(['minecraft:andesite'], [Fluid.water(100), 'minecraft:cobblestone']);
	event.recipes.create.compacting(['minecraft:andesite'], [Fluid.water(100), 'minecraft:stone']);
	event.recipes.create.mixing(['minecraft:dirt'], [Fluid.water(200), 'minecraft:gravel']);
	event.recipes.create.mixing(['minecraft:clay_ball','minecraft:clay_ball','minecraft:clay_ball','minecraft:clay_ball'], [Fluid.water(200), 'minecraft:dirt']);

	event.remove({ output: 'create_new_age:thorium'});
	event.recipes.create.mixing(['create_new_age:radioactive_thorium','create_new_age:thorium'], 
		['create_new_age:radioactive_thorium','minecraft:cobblestone',Fluid.water(1000)]);
		
	event.shapeless("minecraft:copper_block", ['minecraft:cut_copper']);
	event.shapeless("minecraft:quartz_block", ['minecraft:chiseled_quartz_block']);
	event.shapeless("minecraft:quartz_block", ['minecraft:chiseled_quartz_block']);
	event.shapeless("4x minecraft:pointed_dripstone", ['minecraft:dripstone_block']);
	
	event.replaceOutput({ output: 'create_new_age:radioactive_thorium' }, 'minecraft:iron_nugget','yyitems:andesite_nugget'	);
		
	event.replaceInput({ mod:'create', id: /goggles/ }, "create:golden_sheet", "create:copper_sheet");
    event.replaceInput({ mod:'create', id: /wrench/ }, "create:golden_sheet", "create:copper_sheet");


    //event.replaceInput({ output: 'toms_storage:ts.crafting_terminal' }, "minecraft:diamond", "#minecraft:planks");

    // Cheaper wood automation
    event.replaceInput({ id: "create:crafting/kinetics/brass_hand" }, "create:brass_sheet", "create:copper_sheet");
    event.replaceInput({ output: "create:deployer" }, "create:electron_tube", "create:cogwheel");


    event.blasting("minecraft:coal", "minecraft:charcoal");
	
    event.recipes.create.pressing('2x create:belt_connector',"minecraft:dried_kelp_block");

 

	});

	
function andesiteAlloyFromCoalOLD(event) {
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
}

function andesiteAlloyWithCoal(event) {
  event
    .addLootTableModifier(/minecraft:blocks\/.*/)
    .matchLoot(Item.of("minecraft:coal"))
    .addLoot("yyitems:raw_andesite_alloy_powder")
    .addLoot("yyitems:raw_andesite_alloy_powder");
}

function andesiteAlloyWithRedstone(event) {
  event
    .addLootTableModifier(/minecraft:blocks\/.*/)
    .matchLoot(Item.of("minecraft:redstone"))
    .addLoot("yyitems:raw_andesite_alloy_powder")
    .addLoot("yyitems:raw_andesite_alloy_powder")
    .addLoot("yyitems:raw_andesite_alloy_powder")
    .addLoot("yyitems:raw_andesite_alloy_powder")
    .addLoot("yyitems:raw_andesite_alloy_powder");
}

function andesiteAlloyWithIron(event) {
  event
    .addLootTableModifier(/minecraft:blocks\/.*/)
    .matchLoot(Item.of("minecraft:raw_iron"))
    .addLoot("yyitems:raw_andesite_alloy_powder")
}

function andesiteAlloyWithZinc(event) {
  event
    .addLootTableModifier(/create:blocks\/.*/)
    .matchLoot(Item.of("create:raw_zinc"))
    .addLoot("yyitems:raw_andesite_alloy_powder")
}

function andesiteAlloyWithCopper(event) {
  event
    .addLootTableModifier(/minecraft:blocks\/.*/)
    .matchLoot(Item.of("minecraft:raw_copper"))
    .addLoot("yyitems:raw_andesite_alloy_powder")
}

function andesiteAlloyWithGold(event) {
  event
    .addLootTableModifier(/minecraft:blocks\/.*/)
    .matchLoot(Item.of("minecraft:raw_gold"))
    .addLoot("yyitems:raw_andesite_alloy_powder")
}


LootJS.modifiers((event) => {
    andesiteAlloyWithCoal(event);
	andesiteAlloyWithRedstone(event);
	andesiteAlloyWithIron(event);
	andesiteAlloyWithZinc(event);
	andesiteAlloyWithGold(event);
	andesiteAlloyWithCopper(event);
});
