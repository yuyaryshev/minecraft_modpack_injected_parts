var ing;
var potionId;
var potionFluid;
var rarityName;
var activationFluid;
var recipe;

const rarityNames = {
    0: "common",
    1: "un_common",
    2: "rare",
    3: "epic",
    4: "legendary",
    5: "mythic"
};

function fixUncommon(r) {
	return r == "un_common" ? "uncommon": r;
}

function buffPotionId(rarity, potionType) {
	rarityName = rarityNames[rarity];
	return `mmorpg:buff_potion/${fixUncommon(rarityName)}_${potionType}`
}

function numbPotionId(rarity, potionType) {
	return `mmorpg:potion/${potionType}/${rarity}`;
}

const potions = {
  "arcane":   {makeId:buffPotionId, ingredients:[{ item: "minecraft:apple" }, { item: "farmersdelight:rice" }]},
  "crit":     {makeId:buffPotionId, ingredients:[{ item: "minecraft:brown_mushroom" }, { item: "farmersdelight:cabbage" }]},
  "dex":      {makeId:buffPotionId, ingredients:[{ item: "minecraft:carrot" }, { tag: "forge:cooked_beef" }]},
  "int":      {makeId:buffPotionId, ingredients:[{ tag: "forge:pumpkin_slices" }, { tag: "forge:cooked_chicken" }]},
  "might":    {makeId:buffPotionId, ingredients:[{ item: "minecraft:red_mushroom" }, { item: "minecraft:beetroot" }]},
  "str":      {makeId:buffPotionId, ingredients:[{ item: "minecraft:potato" }, { tag: "forge:cooked_pork" }]},
  "health":   {makeId:numbPotionId, ingredients:[{ tag: "forge:tomato" }, { item: "minecraft:sweet_berries" }]},
  "resource": {makeId:numbPotionId, ingredients:[{ item: "minecraft:melon_slice" }, { item: "minecraft:cocoa_beans" }]}
};


var fish_replacement = '#forge:cooked_fishes';

function getIngredients(genRound, rarity, potionType) {
	switch(genRound) {
		case 1: return [potions[potionType].ingredients[0], fish_replacement];
		case 2: return [fish_replacement, potions[potionType].ingredients[1]];
	}
	return potions[potionType].ingredients;
}

function fillingAndEmptying(event, potionId) {
    potionFluid = { fluid: "create:potion", nbt: `{Potion: "${potionId}"}`, amount: 250 };
	event.custom({
		type: `create:filling`,
		ingredients: [ potionFluid, 'minecraft:glass_bottle' ],
		results: [{ item: potionId }]
	});	

	event.custom({
		type: `create:emptying`,
		ingredients: [ { item: potionId } ],
		results: [potionFluid, 'minecraft:glass_bottle']
	});
}

function potionRecipes(event, genRound, rarity, potionType) {
	rarityName = rarityNames[rarity];
	activationFluid = { fluid: "create:potion", nbt: `{Potion: "yyitems:activation_liquid_${rarityName}"}`, amount: 250 };
    ing = getIngredients(genRound, rarity, potionType);
	potionId = potions[potionType].makeId(rarity, potionType);
	potionFluid = { fluid: "create:potion", nbt: `{Potion: "${potionId}"}`, amount: 250 };
    recipe = {
        type: `create:mixing`,
        ingredients: [ activationFluid, ing[0], ing[1] ],
        results: [potionFluid]
    };
	event.custom(recipe);
    fillingAndEmptying(event, potionId);
}

ServerEvents.recipes(event => {
  event.remove({output:'mmorpg:alchemy_station'});
  event.remove({output:'mmorpg:station/alchemy'});
  event.remove({type:'minecraft:crafting_shaped', output:/mmorpg[:]potion/});

  for(let genRound=0; genRound<=2; genRound++) {
	  for(let rarity=0; rarity<=5; rarity++) {
		  for(let potionType in potions) {
			  potionRecipes(event, genRound, rarity, potionType);
		  }
	  }
  }
});
