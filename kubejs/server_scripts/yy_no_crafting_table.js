// yy_replace_iron_with_andesite.js
// Converts iron ingredients in selected recipes to andesite equivalents

ServerEvents.recipes(event => {	
	event.remove(		{ 
			output: /crafting_table/,
		});
	
	  event.custom(
		{
		  "type": "minecraft:crafting_shaped",
		  "category": "equipment",
		  "key": {
			"p": {
			  "tag": "minecraft:planks"
			},
		  },
		  "pattern": [
			"pp",
			"pp",
		  ],
		  "result": {
			"item": 'yy_mechanical_workbench:mechanical_workbench',
		  },
		  "show_notification": true
		}
	  );
	  
});


