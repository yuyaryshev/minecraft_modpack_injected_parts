Normal Drops Configuration
=========================

This directory contains drops that are ALWAYS active.

Files:
- Global_Hostile_Drops.json: Main configuration for all hostile mobs
  * Contains your primary drop configurations
  * Will regenerate with basic example if deleted
  * Only delete if you want to reset to defaults
- Global_Hostile_Drops_Example.json: Comprehensive examples (Safe to delete)
- Custom .json files: Your additional drop configurations
- Mobs/: Entity-specific drop configurations

These drops will always be checked when entities are killed,
regardless of any active events.

IMPORTANT:
- Global_Hostile_Drops.json is your main configuration file
- It will regenerate if deleted, but you'll lose your custom settings
- Example files can be safely deleted and will regenerate with updates
