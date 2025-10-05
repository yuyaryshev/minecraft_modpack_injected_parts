// yy_replace_iron_with_andesite.js
// Converts iron ingredients in selected recipes to andesite equivalents

ServerEvents.recipes(event => {	
	return; // disabled for now
	
    // Wooden tools
    event.shaped("minecraft:wooden_axe", ["PP", "SP"], {
        P: "#minecraft:planks",
        S: "minecraft:stick",
    });

    event.shaped("minecraft:wooden_pickaxe", ["SS", "S "], {
        S: "minecraft:stick",
    });

    event.shaped("minecraft:wooden_shovel", ["P", "S"], {
        P: "#minecraft:planks",
        S: "minecraft:stick",
    });

    event.shaped("minecraft:wooden_hoe", ["PP", " S"], {
        P: "#minecraft:planks",
        S: "minecraft:stick",
    });

    event.shaped("minecraft:wooden_sword", [" P", "S "], {
        P: "#minecraft:planks",
        S: "minecraft:stick",
    });

    event.shaped("minecraft:ladder", ["S ", "PP"], {
        P: "#minecraft:planks",
        S: "minecraft:stick",
    });

    // Cheap early anvil
    event.shaped("minecraft:chipped_anvil", ["BIB", " B ", "CCC"], {
        B: "minecraft:copper_block",
        C: "minecraft:copper_ingot",
        I: "minecraft:iron_ingot",
    });
	
	
});


