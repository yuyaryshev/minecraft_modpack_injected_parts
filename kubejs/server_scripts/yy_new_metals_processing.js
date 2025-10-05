// yy_replace_iron_with_andesite.js
// Converts iron ingredients in selected recipes to andesite equivalents

const useOccultism = false;
const useTConstuct = false;
const moltenModPrefix = useTConstuct?'tconstruct:':'createmetallurgy:';
const meltingRecipeType = useTConstuct?"tconstruct:melting":"createmetallurgy:melting";

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
	},
	{
		mainMetal: true,
		n: "zinc",
        raw: "create:raw_zinc",
		nugget: "create:zinc_nugget",
        ingot: "create:zinc_ingot",
        createCrushed:"create:crushed_raw_zinc",
        dirtyDust:"createmetallurgy:dirty_zinc_dust",
        metalDust:"createmetallurgy:zinc_dust",
        dirtyCompanions:["minecraft:gunpowder"],
		fluid: moltenModPrefix+"molten_zinc",
		complementBlock:'create:asurine',
	},
	{
		mainMetal: true,
		n: "gold",
        raw: "minecraft:raw_gold",
		nugget: "minecraft:gold_nugget",
        ingot: "minecraft:gold_ingot",
        createCrushed:"create:crushed_raw_gold",
        dirtyDust:"createmetallurgy:dirty_gold_dust",
        metalDust:"createmetallurgy:gold_dust",
        dirtyCompanions:["minecraft:quartz"],
		fluid: moltenModPrefix+"molten_gold",
		complementBlock:'create:ochrum',
	},
	{
		n: "redstone",
		inpureDust: "yyitems:inpure_redstone_dust",
		washingResults: [
			{ n: "minecraft:sand", p: 0.8 },
			{ n: "minecraft:gravel", p: 0.2 },
			{ n: "minecraft:redstone", p: 0.1 },
		],
	},
	{
		n: "diamond",
		inpureDust: "yyitems:inpure_diamond_dust",
		washingResults: [
			{ n: "minecraft:sand", p: 0.8 },
			{ n: "minecraft:gravel", p: 0.1 },
			{ n: "minecraft:quartz", p: 0.1 },
			{ n: "minecraft:clay", p: 0.1 },
			{ n: "yyitems:diamond_dust", p: 0.03, },
			{ n: "minecraft:gunpowder", p: 0.03 },
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

ServerEvents.recipes(event => {
    // cleaning_dust
    event.recipes.create.mixing(
        ["4x yyitems:cleaning_dust"],
        ["ceramics:unfired_porcelain", '#minecraft:coals']
    )
        .processingTime(600);

    // adv_cleaning_dust
    event.recipes.create.mixing(
        ["4x yyitems:adv_cleaning_dust"],
        ["yyitems:cleaning_dust", 'minecraft:redstone', 'yyitems:diamond_dust']
    )
        .heated()
        .processingTime(1200);

    // inpure_netherite_dust
    event.recipes.create.mixing(
        ["yyitems:inpure_netherite_dust"],
        ["yyitems:adv_cleaning_dust", "minecraft:netherite_scrap" ]
    )
        .heated()
        .processingTime(400);

    // netherite_ingot
    event.blasting("minecraft:netherite_ingot", "yyitems:inpure_netherite_dust");

    //event.replaceOutput(
	//	{ 
	//		type: 'minecraft:smelting',			
	//		output: 'minecraft:iron_ingot',
	//	},
	//	'minecraft:iron_ingot',
	//	'andesit:iron_nugget',
	//);
	
	event.recipes.create.pressing({
        ingredients: [{ item: "minecraft:iron_block" }],
        results: [{ item: "yyitems:iron_weapon_ingot", count: 1 }],
        processingTime: 300,
    });
	
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
		
    for (const m of materials) {
        if (isMetal(m)) {
            // event.remove({ type: 'minecraft:smelting', output: m.ingot });
            // event.remove({ type: 'minecraft:blasting', output: m.ingot });
            // event.remove({ output: m.createCrushed});

            event.remove({ input: m.createCrushed });
            event.remove({ input: m.dirtyDust });
            event.remove({ input: m.raw, output:m.createCrushed });

            event.recipes.create.milling(
				[{item: `yyitems:raw_${m.n}_nugget`},{item: `yyitems:raw_${m.n}_nugget`}],
				{item: `yyitems:poor_raw_${m.n}`}			
			).processingTime(300);

            event.recipes.create.crushing(
				[{item: `yyitems:raw_${m.n}_nugget`},{item: `yyitems:raw_${m.n}_nugget`},{item: `yyitems:raw_${m.n}_nugget`}],
				{item: `yyitems:poor_raw_${m.n}`}
			).processingTime(30);

            event.recipes.create.milling(
                `27x yyitems:raw_${m.n}_nugget`,
                {item: m.raw}
            ).processingTime(300);

            event.recipes.create.crushing(
                `32x yyitems:raw_${m.n}_nugget`,
                {item: m.raw}
            ).processingTime(30);


            if (m.nugget) {
				event.shapeless(m.nugget, [
					{ G: `yyitems:${m.n}_grain` },{ G: `yyitems:${m.n}_grain` },{ G: `yyitems:${m.n}_grain` },
					{ G: `yyitems:${m.n}_grain` },{ G: `yyitems:${m.n}_grain` },{ G: `yyitems:${m.n}_grain` },
					{ G: `yyitems:${m.n}_grain` },{ G: `yyitems:${m.n}_grain` },{ G: `yyitems:${m.n}_grain` },
				]);
            }

            event.smelting(`1x yyitems:${m.n}_grain`, `yyitems:poor_raw_${m.n}`).id(`kubejs:${m.n}_sm1`);
            event.blasting(`3x yyitems:${m.n}_grain`, `yyitems:poor_raw_${m.n}`).id(`kubejs:${m.n}_bl1`);

            // 1 RawIron = 1 ingot = 9 nuggets = 9*9 grains = 9*9/3 nuggets = 27 nuggets
            event.smelting(`3x yyitems:${m.n}_grain`, `yyitems:raw_${m.n}_nugget`).id(`kubejs:${m.n}_sm2`);
            event.blasting(`5x yyitems:${m.n}_grain`, `yyitems:raw_${m.n}_nugget`).id(`kubejs:${m.n}_bl2`);
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
                ingredients: [{item: `yyitems:${m.n}_grain`}],
                results: [{
                    fluid: m.fluid,
                    amount: 2,
                }],
                temperature: 800,
                time: 50,
				//heatRequirement:m.heatRequirement,
            });

            event.custom({
                type: meltingRecipeType,
                ingredients: [{item: `yyitems:raw_${m.n}_nugget`}],
                results: [{fluid: m.fluid, amount: 16}],
                temperature: 800,
                time: 150,
				//heatRequirement:m.heatRequirement,
            });
        } else {
            event.recipes.create.splashing(
				m.washingResults.map((it) => (Item.of(it.n).withChance(it.p))),
				{ item: `yyitems:inpure_${m.n}_dust` }
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



const oreBlocks = [
	`deeperdarker:gloomslate_iron_ore`,
	`deeperdarker:sculk_stone_iron_ore`,
	`minecraft:deepslate_iron_ore`,
	`projectvibrantjourneys:ferrous_gravel`,
	`minecraft:iron_ore`,
];

let blk;

LootJS.modifiers((event) => {
	for(let m of materials.filter(m=>m.mainMetal)){
		for(let b0 of oreBlocks){
			blk=b0.split('iron').join(m.n);
			event
				.addBlockLootModifier(blk)
				.removeLoot(ItemFilter.ALWAYS_TRUE)
				.addWeightedLoot(
					[20, 40],
					[
						Item.of(`yyitems:poor_raw_${m.n}`).withChance(99.5), 
						Item.of(`minecraft:raw_${m.n}`).withChance(0.1), 
						Item.of(`yyitems:raw_${m.n}_nugget`).withChance(0.4)]
				);
		}

		event
			.addBlockLootModifier(m.complementBlock)
			.removeLoot(ItemFilter.ALWAYS_TRUE)
			.addWeightedLoot(
				[20, 40],
				[
					Item.of(`yyitems:poor_raw_${m.n}`).withChance(99.5), 
					Item.of(`minecraft:raw_${m.n}`).withChance(0.1), 
					Item.of(`yyitems:raw_${m.n}_nugget`).withChance(0.4)]
			);
	}
	
});

//ServerEvents.modifyBlockLootTables(event => {
//    event.modify('minecraft:iron_ore', table => {
//        table.addPool(pool => {
//            pool.addItem('yyitems:poor_raw_iron', 3); // 3 items
//        });
//    });
//});

