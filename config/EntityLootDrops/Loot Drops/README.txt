Entity Loot Drops Configuration Guide
===================================

This directory contains all entity loot drop configurations.

Directory Structure:
-------------------
Loot Drops/
  ??? Normal Drops/           # Always active drops
  ?   ??? Global_Hostile_Drops.json        # Main hostile mob drops
  ?   ??? Global_Hostile_Drops_Example.json # Comprehensive examples
  ?   ??? [Custom].json       # Your custom drop files
  ?   ??? Mobs/               # Entity-specific drops
  ?       ??? [entity]_drops.json # Per-entity configurations
  ??? Event Drops/            # Event-specific drops
      ??? Winter/             # Winter event drops
      ??? Summer/             # Summer event drops
      ??? Easter/             # Easter event drops
      ??? Halloween/          # Halloween event drops
      ??? [Custom Event]/     # Your custom events
          ??? Global_Hostile_Drops.json
          ??? Global_Hostile_Drops_Example.json
          ??? Mobs/           # Event-specific entity drops

Configuration Format:
--------------------
All drop configurations use JSON format with these properties:

BASIC PROPERTIES:
- entityId: Entity ID (e.g., "minecraft:zombie") - only for entity-specific drops
- itemId: Item to drop (e.g., "minecraft:diamond")
- dropChance: Percentage chance to drop (0-100)
- minAmount: Minimum amount to drop
- maxAmount: Maximum amount to drop
- requirePlayerKill: If true, only drops when killed by a player

ADVANCED PROPERTIES:
- nbtData: Custom NBT data for the dropped item
- allowDefaultDrops: If false, prevents normal drops (default: true)
- allowModIDs: List of mod IDs allowed to trigger this drop

EXTRA DROPS:
- extraDropChance: Chance for bonus drops (0-100)
- extraAmountMin: Minimum bonus amount
- extraAmountMax: Maximum bonus amount

REQUIREMENTS:
- requiredDimension: Dimension where drop can occur (e.g., "minecraft:overworld")
- requiredBiome: Biome where drop can occur (e.g., "minecraft:desert")
- requiredAdvancement: Player advancement required
- requiredEffect: Player effect required (e.g., "minecraft:luck")
- requiredEquipment: Equipment player must have
- minLevel: Minimum entity level (if using level mods)
- maxLevel: Maximum entity level (if using level mods)

COMMANDS:
- command: Command to execute when entity dies (regardless of drop)
- commandChance: Chance to execute the command (0-100)
- dropCommand: Command to execute ONLY when item actually drops
- dropCommandChance: Chance to execute the drop command (0-100)

PLACEHOLDERS (for commands):
- @killer: The player who killed the entity
- @entity: The entity that was killed
- @item: The dropped item
- @amount: The amount dropped

Example Configuration:
---------------------
[
  {
    "comment": "Zombies drop diamonds rarely with notification",
    "entityId": "minecraft:zombie",
    "itemId": "minecraft:diamond",
    "dropChance": 5.0,
    "minAmount": 1,
    "maxAmount": 2,
    "requirePlayerKill": true,
    "requiredDimension": "minecraft:overworld",
    "command": "tellraw @a {\"text\":\"A zombie was slain!\",\"color\":\"yellow\"}",
    "commandChance": 25.0,
    "dropCommand": "tellraw @a {\"text\":\"Rare diamond drop!\",\"color\":\"aqua\"}",
    "dropCommandChance": 100.0,
    "extraDropChance": 15.0,
    "extraAmountMin": 1,
    "extraAmountMax": 3
  }
]

Tips:
----
- Use Global_Hostile_Drops.json for drops that apply to all hostile mobs
- Use Mobs/ folder for entity-specific drops
- Create custom .json files for organized drop categories
- Event drops only activate when the event is enabled
- Delete example files to regenerate them with updates
- Use /lootdrops reload to apply changes without restarting
