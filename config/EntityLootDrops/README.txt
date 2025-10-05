EntityLootDrops Mod Configuration Guide
=======================================

This mod allows you to customize entity drops, block drops, fishing drops, and crafting recipes.

Directory Structure:
-------------------
config/EntityLootDrops/
  ??? Loot Drops/         # Entity loot drop configurations
  ?   ??? Normal Drops/   # Always active drops
  ?   ?   ??? Global_Hostile_Drops.json
  ?   ?   ??? Global_Hostile_Drops_Example.json
  ?   ?   ??? Mobs/       # Entity-specific drops
  ?   ??? Event Drops/    # Event-specific drops
  ?       ??? Winter/     # Winter event drops
  ?       ??? Summer/     # Summer event drops
  ?       ??? Easter/     # Easter event drops
  ?       ??? Halloween/  # Halloween event drops
  ??? Blocks/             # Block drop configurations
  ??? Recipes/            # Custom recipe configurations
  ?   ??? Shaped/         # Shaped crafting recipes
  ?   ??? Shapeless/      # Shapeless crafting recipes
  ?   ??? Brewing/        # Brewing stand recipes
  ?   ??? Furnace/        # Furnace/smelting recipes
  ?   ??? Smithing/       # Smithing table recipes
  ??? Fishing/            # Fishing drop configurations
  ?   ??? Global_Fishing_Rewards.json
  ?   ??? Conditional Drops/  # Weather/time-based drops
  ?   ??? Biome Drops/        # Biome-specific drops
  ?   ??? Dimension Drops/    # Dimension-specific drops
  ??? messages.json       # Custom event messages

Entity Loot Drops:
-----------------
The main feature of this mod. Configure custom drops when entities are killed.

Key Features:
- Global drops for all hostile mobs
- Entity-specific drops
- Event-based seasonal drops
- Command execution on kill/drop
- Advanced conditions (biome, dimension, player requirements)
- Extra drop chances and bonus amounts
- NBT data support for custom items

Commands:
--------
Entity Loot Drops:
  /lootdrops reload - Reload all configurations
  /lootdrops event <name> <true|false> - Toggle event
  /lootdrops event dropchance <true|false> - Toggle double drop chance
  /lootdrops event doubledrops <true|false> - Toggle double drops
  /lootdrops active_events - List active events
  /lootdrops listall - List all available events
  /lootdrops debug <true|false> - Toggle debug logging

Other Features:
  /blockdrops - Block drop commands
  /recipes - Recipe commands
  /fishingdrops - Fishing drop commands

Configuration Tips:
------------------
1. Start with Global_Hostile_Drops.json for drops that apply to all hostile mobs
2. Use the Mobs/ folders for entity-specific configurations
3. Create custom .json files to organize your drops by theme
4. Use events for seasonal or temporary drops
5. Test with debug logging enabled: /lootdrops debug true
6. Use /lootdrops reload to apply changes without restarting

Each directory contains its own README file with detailed instructions.
