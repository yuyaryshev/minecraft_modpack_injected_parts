// Offline dump for kubejs_offline_runner
// Run Minecraft once with this script enabled to emit snapshot JSON in logs.

const BuiltInRegistries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
const Registries = Java.loadClass('net.minecraft.core.registries.Registries');
const DUMP_START = 'KUBEJS_OFFLINE_DUMP_START';
const DUMP_END = 'KUBEJS_OFFLINE_DUMP_END';

const snapshot = {
  items: [],
  blocks: [],
  fluids: [],
  recipeTypes: [],
  recipes: [],
  tags: {
    item: {},
  },
};

function toIdList(keySet) {
  const out = [];
  const arr = keySet.toArray();
  for (let i = 0; i < arr.length; i++) {
    out.push(String(arr[i]));
  }
  return out;
}

function extractOutputs(jsonObj) {
  if (!jsonObj) return [];
  const outputs = new Set();

  function addFromValue(v) {
    if (!v) return;
    if (typeof v === 'string') {
      outputs.add(v);
      return;
    }
    if (typeof v === 'object') {
      if (typeof v.item === 'string') outputs.add(v.item);
      if (typeof v.id === 'string') outputs.add(v.id);
    }
  }

  addFromValue(jsonObj.result);
  addFromValue(jsonObj.output);

  if (Array.isArray(jsonObj.results)) {
    for (const r of jsonObj.results) addFromValue(r);
  }
  if (Array.isArray(jsonObj.outputs)) {
    for (const r of jsonObj.outputs) addFromValue(r);
  }

  return Array.from(outputs);
}

// Note: tag dump is disabled to avoid class filter issues in KubeJS.
// ServerEvents.tags('item', event => {
//   try {
//     const access = RegistryAccessContainer.current;
//     const tagMap = access.getAllTags(Registries.ITEM);
//     const tagEntries = tagMap.entrySet().toArray();
//     for (let i = 0; i < tagEntries.length; i++) {
//       const entry = tagEntries[i];
//       const tagId = String(entry.getKey());
//       const holders = entry.getValue();
//       const values = [];
//       const it = holders.iterator();
//       while (it.hasNext()) {
//         const holder = it.next();
//         const key = holder.unwrapKey().orElse(null);
//         if (key) {
//           values.push(String(key.location()));
//         }
//       }
//       snapshot.tags.item[tagId] = values;
//     }
//   } catch (e) {
//     console.error('Offline dump: failed to read item tags: ' + e);
//   }
// });

ServerEvents.recipes(event => {
  try {
    snapshot.items = toIdList(BuiltInRegistries.ITEM.keySet());
    snapshot.blocks = toIdList(BuiltInRegistries.BLOCK.keySet());
    snapshot.fluids = toIdList(BuiltInRegistries.FLUID.keySet());
    snapshot.recipeTypes = toIdList(BuiltInRegistries.RECIPE_SERIALIZER.keySet());

    var recipeEntries = event.originalRecipes.entrySet().toArray();
    for (var i = 0; i < recipeEntries.length; i++) {
      var entry = recipeEntries[i];
      var recipeId = String(entry.getKey());
      var recipe = entry.getValue();
      var typeId = null;
      if (recipe.type && recipe.type.idString) {
        typeId = String(recipe.type.idString);
      }

      var outputs = [];
      try {
        var json = recipe.originalJson || recipe.json;
        if (json) {
          outputs = extractOutputs(JSON.parse(String(json)));
        }
      } catch (e) {
        // ignore JSON parse errors
      }

      var entryObj = {
        id: recipeId,
        outputs: outputs,
      };
      if (typeId) {
        entryObj.type = typeId;
      }
      snapshot.recipes.push(entryObj);
    }

    console.info(DUMP_START + JSON.stringify(snapshot) + DUMP_END);
  } catch (e) {
    console.error('Offline dump failed: ' + e);
  }
});
