LootJS.modifiers((event) => {
	event
		.addLootTableModifier(/^(?!.*:blocks\/).*$/)
		.matchLoot("minecraft:diamond")
		.randomChance(0.8)
		.addLoot("create:brass_ingot");
	event
		.addLootTableModifier(/^(?!.*:blocks\/).*$/)
		.matchLoot("minecraft:diamond")
		.randomChance(0.8)
		.addLoot("create:brass_ingot");
		
	event
		.addLootTableModifier(/^(?!.*:blocks\/).*$/)
		.matchLoot("minecraft:diamond")
		.randomChance(0.9)
		.addLoot("create:zinc_ingot");
	event
		.addLootTableModifier(/^(?!.*:blocks\/).*$/)
		.matchLoot("minecraft:diamond")
		.randomChance(0.9)
		.addLoot("create:zinc_ingot");
		
	event
		.addLootTableModifier(/^(?!.*:blocks\/).*$/)
		.matchLoot("minecraft:diamond")
		.randomChance(0.50)
		.addLoot("create:rose_quartz");

	event
		.addLootTableModifier(/^(?!.*:blocks\/).*$/)
		.matchLoot("minecraft:gold_ingot")
		.randomChance(0.33)
		.addLoot("create:brass_ingot");
		
	event
		.addLootTableModifier(/^(?!.*:blocks\/).*$/)
		.matchLoot("minecraft:gold_ingot")
		.randomChance(0.66)
		.addLoot("create:zinc_ingot");
		
	event
		.addLootTableModifier(/^(?!.*:blocks\/).*$/)
		.matchLoot("minecraft:gold_ingot")
		.randomChance(0.20)
		.addLoot("create:rose_quartz");
		
	event
		.addLootTableModifier(/^(?!.*:blocks\/).*$/)
		.matchLoot("minecraft:iron_ingot")
		.randomChance(0.33)
		.addLoot("create:brass_ingot");
		
	event
		.addLootTableModifier(/^(?!.*:blocks\/).*$/)
		.matchLoot("minecraft:iron_ingot")
		.randomChance(0.5)
		.addLoot("create:rose_quartz");

		
	event
		.addLootTableModifier(/^(?!.*:blocks\/).*$/)
		.matchLoot("minecraft:iron_ingot")
		.randomChance(0.66)
		.addLoot("create:zinc_ingot");

	event
		.addLootTableModifier(/^(?!.*:blocks\/).*$/)
		.matchLoot("#forge:nuggets")
		.randomChance(0.5)
		.addLoot("create:brass_nugget");

	event
		.addLootTableModifier(/.*/)
		.matchLoot("#forge:nuggets")
		.randomChance(0.8)
		.addLoot("create:zinc_nugget");
});
