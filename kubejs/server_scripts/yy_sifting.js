// yy_sifting.js

ServerEvents.recipes(event => {
	event.remove({ type: "createsifter:sifting" });
	event.custom({
	  type: "createsifter:sifting",
	  ingredients: [
		{ item: "minecraft:dirt" },
		{ item: "createsifter:string_mesh" }
	  ],
	  processingTime: 500,
	  results: [
		{ chance: 0.005, item: "minecraft:kelp" },
		{ chance: 0.3, item: "minecraft:seagrass" },
		{ chance: 0.05, item: "minecraft:tube_coral" },
		{ chance: 0.05, item: "minecraft:brain_coral" },
		{ chance: 0.05, item: "minecraft:bubble_coral" },
		{ chance: 0.05, item: "minecraft:fire_coral" },
		{ chance: 0.05, item: "minecraft:horn_coral" },

		{ chance: 0.01, item: "minecraft:beetroot_seeds" },
		{ chance: 0.01, item: "farmersdelight:cabbage_seeds" },
		{ chance: 0.01, item: "corn_delight:corn_seeds" },
		{ chance: 0.01, item: "blue_skies:fiery_bean_seeds" },
		{ chance: 0.01, item: "supplementaries:flax_seeds" },
		{ chance: 0.01, item: "undergarden:gloomgourd_seeds" },
		{ chance: 0.01, item: "botania:grass_seeds" },
		{ chance: 0.01, item: "chococraft:gysahl_green_seeds" },
		{ chance: 0.01, item: "minecraft:melon_seeds" },
		{ chance: 0.01, item: "botania:mycelium_seeds" },
		{ chance: 0.01, item: "botania:podzol_seeds" },
		{ chance: 0.01, item: "minecraft:pumpkin_seeds" },
		{ chance: 0.01, item: "blue_skies:scalefruit_seeds" },
		{ chance: 0.01, item: "botania:scorched_seeds" },
		{ chance: 0.01, item: "farmersdelight:tomato_seeds" },
		{ chance: 0.01, item: "minecraft:torchflower_seeds" },
		{ chance: 0.01, item: "minecraft:wheat_seeds" },
		{ chance: 0.01, item: "farmersdelight:rice" },
		{ chance: 0.01, item: "farmersdelight:onion" },
		{ chance: 0.003, item: "minecraft:nether_wart" },
	  ],
	  waterlogged: true
	});

  
  event.custom(
    {
      "type": "createsifter:sifting",
      "ingredients": [
        {
          "item": "createsifter:advanced_brass_mesh"
        },
        {
          "item": "minecraft:gravel"
        }
      ],
      "processingTime": 200,
      "results": [
        {
          "chance": 0.1,
          "item": "yyitems:raw_copper_nugget"
        },
        {
          "chance": 0.1,
          "item": "yyitems:raw_zinc_nugget"
        },
        {
          "chance": 0.05,
          "item": "yyitems:raw_gold_nugget"
        },
        {
          "chance": 0.15,
          "item": "yyitems:raw_iron_nugget"
        },
        {
          "chance": 0.1,
          "item": "minecraft:lapis_lazuli"
        },
        {
          "chance": 0.002,
          "item": "minecraft:diamond"
        },
        {
          "chance": 0.005,
          "item": "minecraft:emerald"
        },
        {
          "chance": 0.03,
          "item": "create:experience_nugget"
        },
		{
          "chance": 0.05,
          "item": "minecraft:glowstone_dust"
        }
      ]
    }
  );
  
    event.custom(
    {
      "type": "createsifter:sifting",
      "ingredients": [
        {
          "item": "createsifter:andesite_mesh"
        },
        {
          "item": "minecraft:gravel"
        }
      ],
      "processingTime": 500,
	  "results": [
        {
          "chance": 0.03,
          "item": "yyitems:raw_copper_nugget"
        },
        {
          "chance": 0.03,
          "item": "yyitems:raw_zinc_nugget"
        },
        {
          "chance": 0.01,
          "item": "yyitems:raw_gold_nugget"
        },
        {
          "chance": 0.05,
          "item": "yyitems:raw_iron_nugget"
        },
        {
          "chance": 0.03,
          "item": "minecraft:lapis_lazuli"
        },
        {
          "chance": 0.01,
          "item": "create:experience_nugget"
        },
		{
          "chance": 0.1,
          "item": "minecraft:coal"
        },
		{
          "chance": 0.05,
          "item": "minecraft:redstone"
        },
		{
          "chance": 0.05,
          "item": "minecraft:quartz"
        },
		{
          "chance": 0.1,
          "item": "minecraft:clay_ball"
        },
        {
          "chance": 0.1,
          "item": "minecraft:flint"
        },
		{
          "chance": 0.03,
          "item": "minecraft:glowstone_dust"
        }
      ]
    }
  );
  
    event.custom(
    {
      "type": "createsifter:sifting",
      "ingredients": [
        {
          "item": "createsifter:brass_mesh"
        },
        {
          "item": "minecraft:gravel"
        }
      ],
      "processingTime": 300,
      "results": [
        {
          "chance": 0.03,
          "item": "yyitems:raw_copper_nugget"
        },
        {
          "chance": 0.03,
          "item": "yyitems:raw_zinc_nugget"
        },
        {
          "chance": 0.01,
          "item": "yyitems:raw_gold_nugget"
        },
        {
          "chance": 0.05,
          "item": "yyitems:raw_iron_nugget"
        },
        {
          "chance": 0.03,
          "item": "minecraft:lapis_lazuli"
        },
        {
          "chance": 0.01,
          "item": "create:experience_nugget"
        },
		{
          "chance": 0.1,
          "item": "minecraft:coal"
        },
		{
          "chance": 0.05,
          "item": "minecraft:redstone"
        },
		{
          "chance": 0.05,
          "item": "minecraft:quartz"
        },
		{
          "chance": 0.1,
          "item": "minecraft:clay_ball"
        },
        {
          "chance": 0.1,
          "item": "minecraft:flint"
        },
		{
          "chance": 0.01,
          "item": "minecraft:glowstone_dust"
        }
      ]
    }
  );
  
    event.custom(
    {
      "type": "createsifter:sifting",
      "ingredients": [
        {
          "item": "createsifter:zinc_mesh"
        },
        {
          "item": "minecraft:gravel"
        }
      ],
      "processingTime": 500,
      "results": [
		{
          "chance": 0.1,
          "item": "minecraft:redstone"
        },
		{
          "chance": 0.1,
          "item": "minecraft:quartz"
        },
        {
          "chance": 0.1,
          "item": "minecraft:coal"
        },
        {
          "chance": 0.05,
          "item": "minecraft:lapis_lazuli"
        },
        {
          "chance": 0.1,
          "item": "minecraft:flint"
        },
        {
          "chance": 0.1,
          "item": "create:experience_nugget"
        },
		{
          "chance": 0.01,
          "item": "minecraft:glowstone_dust"
        }
      ]
    }
  );
  
    event.custom(
    {
      "type": "createsifter:sifting",
      "ingredients": [
        {
          "item": "minecraft:sand"
        },
        {
          "item": "createsifter:andesite_mesh"
        }
      ],
      "processingTime": 500,
      "results": [
        {
          "chance": 0.2,
          "item": "minecraft:redstone"
        },
        {
          "chance": 0.2,
          "item": "minecraft:bone_meal"
        },
        {
          "chance": 0.1,
          "item": "create:experience_nugget"
        },
        {
          "chance": 0.01,
          "item": "minecraft:glowstone_dust"
        }
      ]
    }
  );
  
  event.custom(
    {
      "type": "createsifter:sifting",
      "ingredients": [
        {
          "item": "minecraft:sand"
        },
        {
          "item": "createsifter:brass_mesh"
        }
      ],
      "processingTime": 500,
      "results": [
        {
          "chance": 0.3,
          "count": 2,
          "item": "minecraft:redstone"
        },
        {
          "chance": 0.05,
          "item": "minecraft:glowstone_dust"
        },
        {
          "chance": 0.4,
          "item": "minecraft:bone_meal"
        },
        {
          "chance": 0.05,
          "item": "minecraft:blaze_powder"
        },
        {
          "chance": 0.2,
          "item": "create:experience_nugget"
        }
      ]
    }
  );
  
  event.custom(
    {
      "type": "createsifter:sifting",
      "ingredients": [
        {
          "item": "minecraft:sand"
        },
        {
          "item": "createsifter:string_mesh"
        }
      ],
      "processingTime": 500,
      "results": [
        {
          "chance": 0.1,
          "item": "minecraft:redstone"
        },
        {
          "chance": 0.3,
          "item": "minecraft:bone_meal"
        }
      ]
    }
  );
  
  event.custom(
    {
      "type": "createsifter:sifting",
      "ingredients": [
        {
          "item": "minecraft:sand"
        },
        {
          "item": "createsifter:zinc_mesh"
        }
      ],
      "processingTime": 500,
      "results": [
        {
          "chance": 0.2,
          "item": "minecraft:redstone"
        },
        {
          "chance": 0.4,
          "item": "minecraft:bone_meal"
        },
        {
          "chance": 0.1,
          "item": "create:experience_nugget"
        }
      ]
    }
  );
  
  event.custom(
    {
      "type": "createsifter:sifting",
      "ingredients": [
        {
          "item": "minecraft:soul_sand"
        },
        {
          "item": "createsifter:advanced_brass_mesh"
        }
      ],
      "processingTime": 500,
      "results": [
        {
          "chance": 0.5,
          "item": "minecraft:quartz"
        },
        {
          "chance": 0.1,
          "item": "minecraft:redstone"
        },
        {
          "chance": 0.05,
          "item": "minecraft:ghast_tear"
        },
        {
          "chance": 0.2,
          "item": "create:experience_nugget"
        }
      ]
    }
  );
  
  event.custom(
    {
      "type": "createsifter:sifting",
      "ingredients": [
        {
          "item": "minecraft:soul_sand"
        },
        {
          "item": "createsifter:brass_mesh"
        }
      ],
      "processingTime": 500,
      "results": [
        {
          "chance": 0.3,
          "item": "minecraft:quartz"
        },
        {
          "chance": 0.1,
          "item": "create:experience_nugget"
        }
      ]
    }
  );
});
