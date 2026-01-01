const rarityName = {
    0: "common",
    1: "un_common",
    2: "rare",
    3: "epic",
    4: "legendary",
    5: "mithic"
};

function fixUncommon(r) {
	return r == "un_common" ? "uncommon": r;
}

const ingredientsByPotion = {
  "mmorpg:buff_potion/mythic_arcane": [
    { item: "minecraft:apple" },
    { item: "farmersdelight:rice" }
  ],
  "mmorpg:buff_potion/mythic_crit": [
    { item: "minecraft:brown_mushroom" },
    { item: "farmersdelight:cabbage" }
  ],
  "mmorpg:buff_potion/mythic_dex": [
    { item: "minecraft:carrot" },
    { tag: "forge:cooked_beef" }
  ],
  "mmorpg:buff_potion/mythic_int": [
    { tag: "forge:pumpkin_slices" },
    { tag: "forge:cooked_chicken" }
  ],
  "mmorpg:buff_potion/mythic_might": [
    { item: "minecraft:red_mushroom" },
    { item: "minecraft:beetroot" }
  ],
  "mmorpg:buff_potion/mythic_str": [
    { item: "minecraft:potato" },
    { tag: "forge:cooked_pork" }
  ],
  "mmorpg:potion/health/0": [
    { item: "#forge:tomato" },
    { item: "minecraft:sweet_berries" }
  ],
  "mmorpg:potion/resource/0": [
    { item: "minecraft:melon_slice" },
    { item: "minecraft:cocoa_beans" }
  ]
};

var fish_replacement = '#forge:cooked_fishes';

function getIngredients(genRound, rarity, potionType) {
	switch(genRound) {
		case 1: return [ingredientsByPotion[potionType][0],];
		case 2: return [ingredientsByPotion[potionType][1],];
	}
	return ingredientsByPotion[potionType];
}

ServerEvents.recipes(event => {	
  for(let genRound=0; genRound<3; genRound++) {
  for(let rarity=0; rarity<6; rarity++) {
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_common"}', amount: 250 },
      getIngredients(genRound, 0, "mmorpg:buff_potion/mythic_arcane")[0],
      getIngredients(genRound, 0, "mmorpg:buff_potion/mythic_arcane")[1]
    ],
    results: [{ item: "mmorpg:buff_potion/mythic_arcane" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_un_common"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_arcane")[0],
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_arcane")[1]
    ],
    results: [{ item: "mmorpg:buff_potion/mythic_arcane" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_rare"}', amount: 250 },
      getIngredients(genRound, 2, "mmorpg:buff_potion/mythic_arcane")[0],
      getIngredients(genRound, 2, "mmorpg:buff_potion/mythic_arcane")[1]
    ],
    results: [{ item: "mmorpg:buff_potion/mythic_arcane" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_epic"}', amount: 250 },
      getIngredients(genRound, 3, "mmorpg:buff_potion/mythic_arcane")[0],
      getIngredients(genRound, 3, "mmorpg:buff_potion/mythic_arcane")[1]
    ],
    results: [{ item: "mmorpg:buff_potion/mythic_arcane" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_legendary"}', amount: 250 },
      getIngredients(genRound, 4, "mmorpg:buff_potion/mythic_arcane")[0],
      getIngredients(genRound, 4, "mmorpg:buff_potion/mythic_arcane")[1]
    ],
    results: [{ item: "mmorpg:buff_potion/mythic_arcane" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_mithic"}', amount: 250 },
      getIngredients(genRound, 5, "mmorpg:buff_potion/mythic_arcane")[0],
      getIngredients(genRound, 5, "mmorpg:buff_potion/mythic_arcane")[1]
    ],
    results: [{ item: "mmorpg:buff_potion/mythic_arcane" }]
  });

  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_common"}', amount: 250 },
      getIngredients(genRound, 0, "mmorpg:buff_potion/mythic_crit")[0],
      getIngredients(genRound, 0, "mmorpg:buff_potion/mythic_crit")[1]
    ],
    results: [{ item: "mmorpg:buff_potion/mythic_crit" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_un_common"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_crit")[0],
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_crit")[1]
    ],
    results: [{ item: "mmorpg:buff_potion/mythic_crit" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_rare"}', amount: 250 },
      getIngredients(genRound, 2, "mmorpg:buff_potion/mythic_crit")[0],
      getIngredients(genRound, 2, "mmorpg:buff_potion/mythic_crit")[1]
    ],
    results: [{ item: "mmorpg:buff_potion/mythic_crit" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_epic"}', amount: 250 },
      getIngredients(genRound, 3, "mmorpg:buff_potion/mythic_crit")[0],
      getIngredients(genRound, 3, "mmorpg:buff_potion/mythic_crit")[1]
    ],
    results: [{ item: "mmorpg:buff_potion/mythic_crit" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_legendary"}', amount: 250 },
      getIngredients(genRound, 4, "mmorpg:buff_potion/mythic_crit")[0],
      getIngredients(genRound, 4, "mmorpg:buff_potion/mythic_crit")[1]
    ],
    results: [{ item: "mmorpg:buff_potion/mythic_crit" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_mithic"}', amount: 250 },
      getIngredients(genRound, 5, "mmorpg:buff_potion/mythic_crit")[0],
      getIngredients(genRound, 5, "mmorpg:buff_potion/mythic_crit")[1]
    ],
    results: [{ item: "mmorpg:buff_potion/mythic_crit" }]
  });

  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_common"}', amount: 250 },
      getIngredients(genRound, 5, "mmorpg:buff_potion/mythic_dex")[0],
      getIngredients(genRound, 5, "mmorpg:buff_potion/mythic_dex")[1]
    ],
    results: [{ item: "mmorpg:buff_potion/mythic_dex" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_un_common"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_dex")[0],
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_dex")[1]
    ],
    results: [{ item: "mmorpg:buff_potion/mythic_dex" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_rare"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_dex")[0],
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_dex")[1]
    ],
    results: [{ item: "mmorpg:buff_potion/mythic_dex" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_epic"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_dex")[0],
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_dex")[1]
    ],
    results: [{ item: "mmorpg:buff_potion/mythic_dex" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_legendary"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_dex")[0],
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_dex")[1]
    ],
    results: [{ item: "mmorpg:buff_potion/mythic_dex" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_mithic"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_dex")[0],
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_dex")[1]
    ],
    results: [{ item: "mmorpg:buff_potion/mythic_dex" }]
  });

  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_common"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_int")[0],
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_int")[1]
    ],
    results: [{ item: "mmorpg:buff_potion/mythic_int" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_un_common"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_int")[0],
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_int")[1]
    ],
    results: [{ item: "mmorpg:buff_potion/mythic_int" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_rare"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_int")[0],
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_int")[1]
    ],
    results: [{ item: "mmorpg:buff_potion/mythic_int" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_epic"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_int")[0],
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_int")[1]
    ],
    results: [{ item: "mmorpg:buff_potion/mythic_int" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_legendary"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_int")[0],
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_int")[1]
    ],
    results: [{ item: "mmorpg:buff_potion/mythic_int" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_mithic"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_int")[0],
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_int")[1]
    ],
    results: [{ item: "mmorpg:buff_potion/mythic_int" }]
  });

  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_common"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_might")[0],
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_might")[1]
    ],
    results: [{ item: "mmorpg:buff_potion/mythic_might" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_un_common"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_might")[0],
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_might")[1]
    ],
    results: [{ item: "mmorpg:buff_potion/mythic_might" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_rare"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_might")[0],
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_might")[1]
    ],
    results: [{ item: "mmorpg:buff_potion/mythic_might" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_epic"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_might")[0],
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_might")[1]
    ],
    results: [{ item: "mmorpg:buff_potion/mythic_might" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_legendary"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_might")[0],
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_might")[1]
    ],
    results: [{ item: "mmorpg:buff_potion/mythic_might" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_mithic"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_might")[0],
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_might")[1]
    ],
    results: [{ item: "mmorpg:buff_potion/mythic_might" }]
  });

  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_common"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_str")[0],
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_str")[1]
    ],
    results: [{ item: "mmorpg:buff_potion/mythic_str" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_un_common"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_str")[0],
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_str")[1]
    ],
    results: [{ item: "mmorpg:buff_potion/mythic_str" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_rare"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_str")[0],
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_str")[1]
    ],
    results: [{ item: "mmorpg:buff_potion/mythic_str" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_epic"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_str")[0],
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_str")[1]
    ],
    results: [{ item: "mmorpg:buff_potion/mythic_str" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_legendary"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_str")[0],
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_str")[1]
    ],
    results: [{ item: "mmorpg:buff_potion/mythic_str" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_mithic"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_str")[0],
      getIngredients(genRound, 1, "mmorpg:buff_potion/mythic_str")[1]
    ],
    results: [{ item: "mmorpg:buff_potion/mythic_str" }]
  });

  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_common"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:potion/health/0")[0],
      getIngredients(genRound, 1, "mmorpg:potion/health/0")[1]
    ],
    results: [{ item: "mmorpg:potion/health/0" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_un_common"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:potion/health/0")[0],
      getIngredients(genRound, 1, "mmorpg:potion/health/0")[1]
    ],
    results: [{ item: "mmorpg:potion/health/1" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_rare"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:potion/health/0")[0],
      getIngredients(genRound, 1, "mmorpg:potion/health/0")[1]
    ],
    results: [{ item: "mmorpg:potion/health/2" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_epic"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:potion/health/0")[0],
      getIngredients(genRound, 1, "mmorpg:potion/health/0")[1]
    ],
    results: [{ item: "mmorpg:potion/health/3" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_legendary"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:potion/health/0")[0],
      getIngredients(genRound, 1, "mmorpg:potion/health/0")[1]
    ],
    results: [{ item: "mmorpg:potion/health/4" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_mithic"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:potion/health/0")[0],
      getIngredients(genRound, 1, "mmorpg:potion/health/0")[1]
    ],
    results: [{ item: "mmorpg:potion/health/5" }]
  });

  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_common"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:potion/resource/0")[0],
      getIngredients(genRound, 1, "mmorpg:potion/resource/0")[1]
    ],
    results: [{ item: "mmorpg:potion/resource/0" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_un_common"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:potion/resource/0")[0],
      getIngredients(genRound, 1, "mmorpg:potion/resource/0")[1]
    ],
    results: [{ item: "mmorpg:potion/resource/1" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_rare"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:potion/resource/0")[0],
      getIngredients(genRound, 1, "mmorpg:potion/resource/0")[1]
    ],
    results: [{ item: "mmorpg:potion/resource/2" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_epic"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:potion/resource/0")[0],
      getIngredients(genRound, 1, "mmorpg:potion/resource/0")[1]
    ],
    results: [{ item: "mmorpg:potion/resource/3" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_legendary"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:potion/resource/0")[0],
      getIngredients(genRound, 1, "mmorpg:potion/resource/0")[1]
    ],
    results: [{ item: "mmorpg:potion/resource/4" }]
  });
  event.custom({
    type: "create:mixing",
    ingredients: [
      { fluid: "create:potion", nbt: '{Potion: "yyitems:activation_liquid_mithic"}', amount: 250 },
      getIngredients(genRound, 1, "mmorpg:potion/resource/0")[0],
      getIngredients(genRound, 1, "mmorpg:potion/resource/0")[1]
    ],
    results: [{ item: "mmorpg:potion/resource/5" }]
  });
  }
  }
});
