// Recovered sequenced assembly recipes for Create: Steam 'n Rails? create_sa

var incomplete_item;

ServerEvents.recipes(event => {
  event.remove({ id: "create_sa:steam_engine_recipe" });
  event.remove({ id: "create_sa:hydraulic_engine_recipe" });
  event.remove({ id: "create_sa:heat_engine_recipe" });

  incomplete_item = "create_sa:incomplete_steam_engine";
  event.custom({
    type: "create:sequenced_assembly",
    ingredient: { tag: "forge:plates/brass" },
    loops: 3,
    results: [
      { item: "create_sa:steam_engine", chance: 120.0 },
      { item: "create:brass_sheet", chance: 8.0 },
      { item: "create:andesite_alloy", chance: 4.0 }
    ],
    sequence: [
      {
        type: "create:deploying",
        ingredients: [
          { item: incomplete_item },
          { item: "create:cogwheel" }
        ],
        results: [{ item: incomplete_item }]
      },
      {
        type: "create:deploying",
        ingredients: [
          { item: incomplete_item },
          { item: "create:large_cogwheel" }
        ],
        results: [{ item: incomplete_item }]
      },
      {
        type: "create:deploying",
        ingredients: [
          { item: incomplete_item },
          { item: "create:propeller" }
        ],
        results: [{ item: incomplete_item }]
      },
      {
        type: "create:deploying",
        ingredients: [
          { item: incomplete_item },
          { item: "create:andesite_alloy" }
        ],
        results: [{ item: incomplete_item }]
      }
    ],
    transitionalItem: { item: incomplete_item }
  }).id("create_sa:steam_engine_recipe");

  incomplete_item = "create_sa:incomplete_hydraulic_engine";
  event.custom({
    type: "create:sequenced_assembly",
    ingredient: { tag: "forge:plates/copper" },
    loops: 3,
    results: [
      { item: "create_sa:hydraulic_engine", chance: 120.0 },
      { item: "create:copper_sheet", chance: 8.0 },
      { item: "create:andesite_alloy", chance: 4.0 }
    ],
    sequence: [
      {
        type: "create:filling",
        ingredients: [
          { item: incomplete_item },
          { fluid: "minecraft:water", nbt: {}, amount: 250 }
        ],
        results: [{ item: incomplete_item }]
      },
      {
        type: "create:pressing",
        ingredients: [{ item: incomplete_item }],
        results: [{ item: incomplete_item }]
      },
      {
        type: "create:pressing",
        ingredients: [{ item: incomplete_item }],
        results: [{ item: incomplete_item }]
      }
    ],
    transitionalItem: { item: incomplete_item }
  }).id("create_sa:hydraulic_engine_recipe");

  incomplete_item = "create_sa:incomplete_heat_engine";
  event.custom({
    type: "create:sequenced_assembly",
    ingredient: { item: "create:andesite_alloy" },
    loops: 3,
    results: [
      { item: "create_sa:heat_engine", chance: 120.0 },
      { item: "create:zinc_nugget", chance: 8.0 },
      { item: "create:andesite_alloy", chance: 4.0 }
    ],
    sequence: [
      {
        type: "create:deploying",
        ingredients: [
          { item: incomplete_item },
          { item: "create:cogwheel" }
        ],
        results: [{ item: incomplete_item }]
      },
      {
        type: "create:deploying",
        ingredients: [
          { item: incomplete_item },
          { item: "create:large_cogwheel" }
        ],
        results: [{ item: incomplete_item }]
      },
      {
        type: "create:deploying",
        ingredients: [
          { item: incomplete_item },
          { tag: "forge:nuggets/zinc" }
        ],
        results: [{ item: incomplete_item }]
      },
      {
        type: "create:deploying",
        ingredients: [
          { item: incomplete_item },
          { tag: "forge:nuggets/copper" }
        ],
        results: [{ item: incomplete_item }]
      }
    ],
    transitionalItem: { item: incomplete_item }
  }).id("create_sa:heat_engine_recipe");
});
