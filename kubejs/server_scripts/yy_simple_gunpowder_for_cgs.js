// yy_simple_gunpowder_for_cgs.js
// Simplify ingredients for getting gunpowder in cgs mod

ServerEvents.recipes(event => {	
  event.custom(
    {
      "type": "create:compacting",
      "ingredients": [
        {
          "amount": 200,
          "fluidTag": "minecraft:lava"
        },
		{
			"item": "minecraft:cobblestone"
		}
      ],
      "results": [
        {
          "item": "minecraft:magma"
        }
      ]
    }
  );
  
  event.remove({
      "type": "create:crushing",
      "input": "minecraft:magma_block"
  });
  
  event.custom(
    {
      "type": "create:crushing",
      "ingredients": [
        {
          "item": "minecraft:magma_block"
        }
      ],
      "processingTime": 400,
      "results": [
	    {
		  "item": "create_blaze_burner_fuels:blazing_rocks"
		},
        {
          "chance": 0.2,
          "item": "cgs:sulfur"
        }
      ]
    }
  );
});
