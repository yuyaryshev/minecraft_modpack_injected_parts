// yy_replace_iron_with_andesite.js
// Converts iron ingredients in selected recipes to andesite equivalents

const useOccultism = false;
const useTConstuct = false;
const moltenModPrefix = useTConstuct?'tconstruct:':'createmetallurgy:';
const meltingRecipeType = useTConstuct?"tconstruct:melting":"createmetallurgy:melting";
let firstSelector = true;
var modid;
var b;
var output;
var andesitePowderChance;

const weaponIngots = true;
const weaponSelectors = [
    /[_]axe/,
    /[_]weapons[:]/,
    /[_]sword/,
    /[_]machete/,
    /[_]broadaxe/,
    /[_]rapier/,
    /[_]spear/,
    /[/]staff[/]/,
	/offhand[/]tome[/]/,
	/jewelry[/]ring[/]/,
	/jewelry[/]necklace[/]/,
	/[_]template/,
	/[_]helmet/,
	/[_]chestplate/,
	/[_]leggings/,
	/[_]boots/,
	/[_]hammer/,
];

const excludeIronAxes = true;

const oreBlocks = [
	`create:iron_ore`,
	`create:deepslate_iron_ore`,
	`minecraft:deepslate_iron_ore`,
	`undergarden:depthrock_iron_ore`,
	`undergarden:shiverstone_iron_ore`,
	`deeperdarker:gloomslate_iron_ore`,
	`deeperdarker:sculk_stone_iron_ore`,
	`minecraft:deepslate_iron_ore`,
	`projectvibrantjourneys:ferrous_gravel`,
	`minecraft:iron_ore`,
];

const materials = [
	{
		mainMetal: true,
		n: "iron",
        raw: "minecraft:raw_iron",
		nugget: "minecraft:iron_nugget",
        ingot:"minecraft:iron_ingot",
        createCrushed:"create:crushed_raw_iron",
        dirtyDust:"createmetallurgy:dirty_iron_dust",
        metalDust:"createmetallurgy:iron_dust",
        dirtyCompanions:["minecraft:redstone"],
		fluid: moltenModPrefix+"molten_iron",
		complementBlock:'create:crimsite',
		complementBlockTag:'create:stone_types/crimsite',
		cant_be_smelted_from_ore_block: true,
		complementChance: 0.4,
	},
	{
		mainMetal: true,
		n: "copper",
        raw: "minecraft:raw_copper",
		nugget: "create:copper_nugget",
        ingot: "minecraft:copper_ingot",
        createCrushed:"create:crushed_raw_copper",
        dirtyDust:"createmetallurgy:dirty_copper_dust",
        metalDust:"createmetallurgy:copper_dust",
        dirtyCompanions:["minecraft:clay"],
		fluid: moltenModPrefix+"molten_copper",
		complementBlock:'create:veridium',
		complementBlockTag:'create:stone_types/veridium',
		cant_be_smelted_from_ore_block: true,
		complementChance: 0.8,
	},
	{
		mainMetal: true,
		n: "zinc",
        raw: "create:raw_zinc",
		nugget: "create:zinc_nugget",
        ingot: "create:zinc_ingot",
        createCrushed:"create:crushed_raw_zinc",
		complementBlock:'create:asurine',
		complementBlockTag:'create:stone_types/asurine',
        dirtyDust:"createmetallurgy:dirty_zinc_dust",
        metalDust:"createmetallurgy:zinc_dust",
        dirtyCompanions:["minecraft:gunpowder"],
		fluid: moltenModPrefix+"molten_zinc",
		cant_be_smelted_from_ore_block: true,
		complementChance: 0.3,
	},
	{
		mainMetal: true,
		n: "gold",
        raw: "minecraft:raw_gold",
		nugget: "minecraft:gold_nugget",
        ingot: "minecraft:gold_ingot",
        createCrushed:"create:crushed_raw_gold",
		complementBlock:'create:ochrum',
		complementBlockTag:'create:stone_types/ochrum',
        dirtyDust:"createmetallurgy:dirty_gold_dust",
        metalDust:"createmetallurgy:gold_dust",
        dirtyCompanions:["minecraft:quartz"],
		fluid: moltenModPrefix+"molten_gold",
		cant_be_smelted_from_ore_block: true,
		complementChance: 0.2,
	},
	{
		n: "redstone",
		cant_be_smelted_from_ore_block: "minecraft:redstone",
		inpureDust: "yyitems:inpure_redstone_dust",
		washingResults: [
			{ n: "minecraft:sand", p: 0.8 },
			{ n: "minecraft:gravel", p: 0.2 },
			{ n: "minecraft:redstone", p: 0.1 },
		],
	},
	{
		n: "diamond",
		inpureDust: "yyinfiniteoreveins:inpure_diamond_dust",
		washingResults: [
			{ n: "minecraft:sand", p: 0.8 },
			{ n: "minecraft:gravel", p: 0.1 },
			{ n: "minecraft:quartz", p: 0.1 },
			{ n: "minecraft:clay", p: 0.1 },
			{ n: "yyitems:diamond_dust", p: 0.03, },
			{ n: "minecraft:gunpowder", p: 0.33 },
		],
        fluid: useTConstuct?"tconstruct:molten_diamond":"yyitems:molten_diamond",
        fluidAmount: 3,
        // heatRequirement:'heated', Not working!
	},
	{
		n: "emerald",
		inpureDust: "yyitems:inpure_emerald_dust",
		washingResults: [
			{ n: "minecraft:sand", p: 0.8 },
			{ n: "minecraft:gravel", p: 0.1 },
			{ n: "minecraft:quartz", p: 0.1 },
			{ n: "minecraft:clay", p: 0.1 },
			{ n: "yyitems:emerald_dust", p: 0.03},
			{ n: "minecraft:gunpowder", p: 0.1 },
		],
        fluid: useTConstuct?"tconstruct:molten_diamond":"yyitems:molten_emerald",
        fluidAmount: 3
    },
];

function isMetal(o) {
	return !o.inpureDust;
}


if(useTConstuct) {
	materials.push({
		n: "cobalt",
		nugget: "tconstruct:cobalt_nugget",
		fluid: moltenModPrefix+"molten_cobalt",
	});
}

if(useOccultism) {
	materials.push(	{
		n: "silver",
		nugget: "occultism:silver_nugget",
		fluid: moltenModPrefix+"molten_silver",
	});
}


function diamondsChanges(event) {
	event.remove({ id: "yyinfiniteoreveins:diamonds_from_dust" });
    event.recipes.create.compacting('minecraft:diamond', [
        'yyitems:diamond_dust',
        'minecraft:quartz'
    ]).heated();
}

function enchantingTableChanges(event) {
     // enchanting_table - move to late game
    event.replaceInput({ id: "minecraft:enchanting_table" }, "minecraft:diamond", "minecraft:diamond_block");
}


function netheriteChanges(event) {
	event.remove({ id: "minecraft:netherite_ingot" });
	event.replaceInput({ id: "createmetallurgy:alloying/netherite" },"minecraft:netherite_scrap", "yyitems:inpure_netherite_dust");
	
    // inpure_netherite_dust
    event.recipes.create.mixing(
        ["yyitems:inpure_netherite_dust"],
        ["yyitems:adv_cleaning_dust", "minecraft:netherite_scrap" ]
    )
        .heated()
        .processingTime(400);

    // netherite_ingot
    event.blasting("minecraft:netherite_ingot", "yyitems:inpure_netherite_dust");
}

function cantSmeltOreBlocksToIngots(event) {
	
	event.remove({ input:"#forge/zinc_ores", output: 'create:zinc_ingot'});
	for(let m of materials.filter(m=>m.mainMetal)){
		for(let b0 of oreBlocks){
			if(m.cant_be_smelted_from_ore_block) {
				output = m.ingot || m.cant_be_smelted_from_ore_block;
				b=b0.split('iron').join(m.n);
				event.remove({ input:b, output: output});
			}
		}		
	}
	
		// 
	// event.remove({ id: "minecraft:redstone_from_smelting_redstone_ore" });
	// event.remove({ id: "minecraft:redstone_from_smelting_deepslate_redstone_ore" });
	// event.remove({ id: "deeperdarker:redstone_from_smelting_sculk_stone_redstone_ore" });
	// event.remove({ id: "deeperdarker:redstone_from_smelting_gloomslate_redstone_ore" });
	// 
	// event.remove({ id: "minecraft:emerald_from_smelting_emerald_ore" });
	// event.remove({ id: "minecraft:emerald_from_smelting_deepslate_emerald_ore" });
	// event.remove({ id: "blue_skies:emerald_from_smelting_everbright_emerald_ore" });
	// event.remove({ id: "blue_skies:emerald_from_smelting_everbright_emerald_ore" });
	// event.remove({ id: "blue_skies:emerald_from_smelting_everbright_emerald_ore" });
	// event.remove({ id: "" });
	// event.remove({ id: "" });
	
	//event.remove({ id: "create:zinc_ingot_from_ore" });
}


function changeCreateCrushingForOresAndCrimsiteLike(event) {
	for(let m of materials.filter(m=>m.mainMetal)){
		event.remove({ input: m.complementBlock, type:"create:crushing" });
		event.remove({ input: m.complementBlockTag, type:"create:crushing" });
		
		andesitePowderChance = 1-m.complementChance;
		if(andesitePowderChance < 0.1) {
			andesitePowderChance = 0.1;
		}
		
		event.recipes.create.milling(
			[
				Item.of(m.createCrushed).withChance(m.complementChance/2), 
				Item.of(m.nugget).withChance(m.complementChance/2), 
				Item.of("yyitems:raw_andesite_alloy_powder").withChance(andesitePowderChance/2)
			],
			{tag: m.complementBlockTag}
		).processingTime(200).id(m.n+'_milling1');;
		
		event.recipes.create.milling(
			[
				Item.of(m.createCrushed).withChance(m.complementChance/2), 
				Item.of(m.nugget).withChance(m.complementChance/2), 
				Item.of("yyitems:raw_andesite_alloy_powder").withChance(andesitePowderChance/2)
			],
			{item: m.complementBlock}
		).processingTime(200).id(m.n+'_milling2');
		
		event.recipes.create.crushing(
			[
				Item.of(m.createCrushed).withChance(m.complementChance), 
				Item.of(m.nugget).withChance(m.complementChance), 
				Item.of("yyitems:raw_andesite_alloy_powder").withChance(andesitePowderChance)
			],
			{tag: m.complementBlockTag}
		).processingTime(30).id(m.n+'_crushing1');
		
		event.recipes.create.crushing(
			[
				Item.of(m.createCrushed).withChance(m.complementChance), 
				Item.of(m.nugget).withChance(m.complementChance), 
				Item.of("yyitems:raw_andesite_alloy_powder").withChance(andesitePowderChance)
			],
			{item: m.complementBlock}
		).processingTime(30).id(m.n+'_crushing2');
	}		
}

function changeCreateCrushingForOresAndCrimsiteLike2(event) {
	event.forEachRecipe({ type: "create:crushing" }, recipe => {
		const json = recipe.json;
		// TBD not finished
	})
}
  
  
function changeEnterEye(event) {
	// Later ender eye
	event.remove({ id: "minecraft:ender_eye" });
    event.shapeless("minecraft:ender_eye", ["minecraft:ender_pearl",
      // "tconstruct:necrotic_bone",
        "minecraft:netherite_block",
    ]);
}


function cleanerRecipes(event) {
    // cleaning_dust
    event.recipes.create.mixing(
        ["4x yyitems:cleaning_dust"],
        ["ceramics:unfired_porcelain", '#minecraft:coals']
    )
        .processingTime(600);

	// adv_cleaning_dust
    event.recipes.create.mixing(
        ["createmetallurgy:coke"],
        ['#minecraft:coals', { fluid: "yyitems:molten_cleaner", amount: 10 }]
    )
        .heated()
        .processingTime(50);

    event.custom({
        type: meltingRecipeType,
        ingredients: [{ item: "yyitems:cleaning_dust" }],
        results: [{
            fluid: "yyitems:molten_cleaner",
            amount: 100,
        }],
        temperature: 800,
        time: 50,
        //heatRequirement:m.heatRequirement,
    });

    // adv_cleaning_dust
    event.recipes.create.mixing(
        ["4x yyitems:adv_cleaning_dust"],
        ["yyitems:cleaning_dust", 'minecraft:redstone', 'yyitems:diamond_dust']
    )
        .heated()
        .processingTime(1200);
		

    event.custom({
        type: meltingRecipeType,
        ingredients: [{ item: "yyitems:adv_cleaning_dust" }],
        results: [{
            fluid: "yyitems:molten_adv_cleaner",
            amount: 100,
        }],
        temperature: 800,
        time: 50,
        //heatRequirement:m.heatRequirement,
    });
}

ServerEvents.recipes(event => {
	enchantingTableChanges(event);
	netheriteChanges(event);
	diamondsChanges(event);
	changeEnterEye(event);
	cleanerRecipes(event);
	// cantSmeltOreBlocksToIngots(event);
	changeCreateCrushingForOresAndCrimsiteLike(event);
	
    // Later ring of repair
    // event.replaceInput({ id: "ring_of_repair:ring_of_repair" }, "minecraft:iron_ingot", "minecraft:netherite_block");
	
	//event.remove({ input:"minecraft:red_sand", output: 'minecraft:gold_nugget'});
	event.replaceOutput({ input:"minecraft:red_sand", output: 'minecraft:gold_nugget'}, "minecraft:gold_nugget", "minecraft:redstone");
	event.replaceOutput({ id: "create:splashing/gravel" }, "minecraft:iron_nugget", "minecraft:quartz");
	
    if(weaponIngots) {
        // Weapon ingots
        event.recipes.create.pressing('yyitems:weapon_iron_ingot',"minecraft:iron_block");
        event.recipes.create.pressing('yyitems:weapon_steel_ingot',"createmetallurgy:steel_block");
        event.recipes.create.pressing('yyitems:weapon_diamond_ingot',"minecraft:diamond_block");

        firstSelector = true;
        for(let weaponSelector of weaponSelectors) {
            if(!firstSelector || !excludeIronAxes){
                event.replaceInput({input:"minecraft:iron_ingot",output:weaponSelector},"minecraft:iron_ingot", 'yyitems:weapon_iron_ingot');
            }
            event.replaceInput({input:"createmetallurgy:steel_ingot",output:weaponSelector},"minecraft:iron_ingot", 'yyitems:weapon_steel_ingot');
            event.replaceInput({input:"minecraft:diamond",output:weaponSelector},"minecraft:diamond", 'yyitems:weapon_diamond_ingot');
            firstSelector = false;
        }
    }


		
    for (const m of materials) {
        if (isMetal(m)) {
            // event.remove({ type: 'minecraft:smelting', output: m.ingot });
            // event.remove({ type: 'minecraft:blasting', output: m.ingot });
            // event.remove({ output: m.createCrushed});

            //event.remove({ input: m.createCrushed });
            //event.remove({ input: m.dirtyDust });
            //event.remove({ input: m.raw, output:m.createCrushed });

        //  event.recipes.create.milling(
		//		[{item: m.createCrushed}, Item.of(m.createCrushed).withChance(0.2), Item.of("yyitems:raw_andesite_alloy_powder").withChance(1.00)],
		//		{item: m.raw}			
		//	).processingTime(300);
        //
        //    event.recipes.create.crushing(
		//		[Item.of(m.createCrushed),Item.of(m.createCrushed).withChance(0.5), Item.of("yyitems:raw_andesite_alloy_powder").withChance(1.00), Item.of("yyitems:raw_andesite_alloy_powder").withChance(0.5)],
		//		{item: m.raw}
		//	).processingTime(30);

			if(m.n === 'copper') {
				event.shapeless(m.nugget, [
					`yyitems:${m.n}_grain`,`yyitems:${m.n}_grain`,
					`yyitems:${m.n}_grain`,`yyitems:${m.n}_grain`,
				]);
			} else if (m.nugget) {
				event.shapeless(m.nugget, [
					`yyitems:${m.n}_grain`,`yyitems:${m.n}_grain`,`yyitems:${m.n}_grain`,
					`yyitems:${m.n}_grain`,`yyitems:${m.n}_grain`,`yyitems:${m.n}_grain`,
					`yyitems:${m.n}_grain`,`yyitems:${m.n}_grain`,`yyitems:${m.n}_grain`,
				]);
            }

            event.smelting( Item.of(m.ingot), m.createCrushed).id(`kubejs:${m.n}_sm1`);				
            event.blasting( Item.of(m.ingot).withChance(1.5), m.createCrushed).id(`kubejs:${m.n}_bl1`);				
			
			event.smelting(`3x yyitems:${m.n}_grain`, `yyitems:raw_${m.n}_nugget`).id(`kubejs:${m.n}_sm3`);
            event.blasting(`5x yyitems:${m.n}_grain`, `yyitems:raw_${m.n}_nugget`).id(`kubejs:${m.n}_bl3`);

		} else {
			event.recipes.create.milling(
				[{item: m.inpureDust}],
				{item: `yyitems:poor_raw_${m.n}`}			
			).processingTime(300);

            event.recipes.create.crushing(
				[{item: m.inpureDust}, Item.of(m.inpureDust).withChance(0.5)],
				{item: `yyitems:poor_raw_${m.n}`}
			).processingTime(30);
        }


        if (!m.washingResults) {
           event.custom({
               type: meltingRecipeType,
               ingredients: [{item: m.createCrushed}],
               results: [{
                   fluid: m.fluid,
                   amount: 90*2,
               }],
               temperature: 800,
               time: 50,
			//heatRequirement:m.heatRequirement,
           });
// CHG7
// CHG7           event.custom({
// CHG7               type: meltingRecipeType,
// CHG7               ingredients: [{item: `yyitems:raw_${m.n}_nugget`}],
// CHG7               results: [{fluid: m.fluid, amount: 16}],
// CHG7               temperature: 800,
// CHG7               time: 150,
// CHG7				//heatRequirement:m.heatRequirement,
// CHG7		});
        } else {
            event.recipes.create.splashing(
				m.washingResults.map((it) => (Item.of(it.n).withChance(it.p))),
				{ item: m.inpureDust }
			);

            for (let it of m.washingResults) {
                if (!it.fluid) {
                    continue;
                }
                event.custom({
                    type: meltingRecipeType,
                    ingredients: [{ item: it.n }],
                    results: [{
                        fluid: it.fluid,
                        amount: it.fluidAmount,
                    }],
                    temperature: 800,
                    time: 150,
					//heatRequirement:m.heatRequirement,
                });
            }
        }
    }
});


//LootJS.modifiers((event) => {
//    event
//        .addBlockLootModifier("minecraft:iron_ore")
//        .removeLoot(ItemFilter.ALWAYS_TRUE)
//        .addLoot('yyitems:poor_raw_iron', 30);
//});




//let blk;
//let rArray1;
//
//function rArray(m) {
//	rArray1 = [
//		LootEntry.of(m.raw)
//		//.withChance(99.8), 
//		//LootEntry.of(m.raw).withChance(0.2), 
//	];
//	if(m.n ==='iron') {
//		rArray1.push(`yyitems:inpure_redstone_dust`);
//	}
//	
//	return rArray1;
//}

//LootJS.modifiers((event) => {
//	for(let m of materials.filter(m=>m.mainMetal)){
//		for(let b0 of oreBlocks){
//			if(m.n === 'copper') {
//				continue;
//			}
//			blk=b0.split('iron').join(m.n);
//			event
//				.addBlockLootModifier(blk)
//				.removeLoot(ItemFilter.ALWAYS_TRUE)
//				.addWeightedLoot(
//					[1, 1],
//					rArray(m)
//				).survivesExplosion();
//		}
//
//		event
//			.addBlockLootModifier(m.complementBlock)
//			.removeLoot(ItemFilter.ALWAYS_TRUE)
//			.addWeightedLoot(
//				[1, 1],
//				rArray(m)
//			).survivesExplosion();
//	}
//});

//  pool.survivesExplosion()

//ServerEvents.modifyBlockLootTables(event => {
//    event.modify('minecraft:iron_ore', table => {
//        table.addPool(pool => {
//            pool.addItem('yyitems:poor_raw_iron', 3); // 3 items
//        });
//    });
//});

