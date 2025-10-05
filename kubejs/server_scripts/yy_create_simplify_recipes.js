// yy_replace_iron_with_andesite.js
// Converts iron ingredients in selected recipes to andesite equivalents

let woodTypes = ["acacia", "birch", "crimson", "dark_oak", "jungle", "oak", "spruce", "warped"];

ServerEvents.recipes(event => {	
	event.recipes.create.compacting(['minecraft:andesite'], [Fluid.water(100), 'minecraft:cobblestone']);
	event.recipes.create.mixing(['minecraft:dirt'], [Fluid.water(200), 'minecraft:gravel']);
	event.recipes.create.mixing(['minecraft:clay_ball','minecraft:clay_ball','minecraft:clay_ball','minecraft:clay_ball'], [Fluid.water(200), 'minecraft:dirt']);
	
	event.remove({ output: 'create_new_age:thorium'});
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
	
	// Cheaper wood automation
    event.replaceInput({ id: "create:crafting/kinetics/brass_hand" }, "create:brass_sheet", "create:copper_sheet");
    event.replaceInput({ id: "create:crafting/kinetics/brass_hand" }, "create:electron_tube", "create:cogwheel");
	
	event.blasting("minecraft:coal", "minecraft:charcoal");
	
    event.recipes.create.pressing({
        ingredients: [{ item: "minecraft:dried_kelp_block" }],
        results: [{ item: "create:belt_connector", count: 2 }],
        processingTime: 300,
    });

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
});


