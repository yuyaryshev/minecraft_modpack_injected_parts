Shaped Recipes Configuration
==========================

Shaped recipes use a pattern-based system similar to vanilla Minecraft recipes.

Required Properties:
------------------
- name: Unique identifier for the recipe
- type: Must be "shaped"
- outputItem: The item ID to create (e.g., "minecraft:diamond_sword")
- pattern: Array of strings representing the crafting grid
- key: Mapping of pattern characters to item IDs

Optional Properties:
------------------
- outputCount: Number of items to output (default: 1)
- outputNbt: NBT data for the output item
- group: Recipe group for the recipe book
- craftCommands: Commands to execute when crafted
- _comment: Documentation comment

Pattern Format:
--------------
The pattern is a 3x3 grid represented as strings:
- Each string represents a row
- Each character represents a slot
- Space character represents an empty slot
- Maximum 3 rows, maximum 3 characters per row

Example:
-------
```json
{
  "name": "custom_diamond_sword",
  "type": "shaped",
  "outputItem": "minecraft:diamond_sword",
  "outputCount": 1,
  "pattern": [
    " D ",
    " D ",
    " S "
  ],
  "key": {
    "D": "minecraft:diamond",
    "S": "minecraft:stick"
  },
  "outputNbt": "{Enchantments:[{id:\"minecraft:sharpness\",lvl:5}],display:{Name:\"{\\\"text\\\":\\\"Super Sword\\\",\\\"color\\\":\\\"gold\\\"}\"}}",
  "craftCommands": [
    "tellraw {player} {\"text\":\"You crafted a Super Sword!\",\"color\":\"gold\"}",
    "playsound minecraft:entity.player.levelup player {player} ~ ~ ~ 1 0.5"
  ],
  "_comment": "Creates an enchanted diamond sword with custom name"
}
```

Pattern Tips:
-----------
1. You can use any character in the pattern (A-Z, a-z, 0-9, symbols)
2. The same character must map to the same item in the key
3. Empty spaces in the pattern represent empty crafting slots
4. Patterns can be smaller than 3x3 (e.g., 2x2 or 1x3)
5. The recipe will work in any position on the crafting grid

NBT Data:
--------
You can add custom NBT data to output items:
- Enchantments: {Enchantments:[{id:\"minecraft:sharpness\",lvl:5}]}
- Custom names: {display:{Name:\"{\\\"text\\\":\\\"Custom Name\\\",\\\"color\\\":\\\"gold\\\"}\"}}
- Lore: {display:{Lore:[\"{\\\"text\\\":\\\"Line 1\\\"}\",\"{\\\"text\\\":\\\"Line 2\\\"}\"]}
- Custom attributes, durability, etc.

Command Placeholders:
-------------------
- {player}: Player's name
- {uuid}: Player's UUID
- {x}: Player's X coordinate
- {y}: Player's Y coordinate
- {z}: Player's Z coordinate
