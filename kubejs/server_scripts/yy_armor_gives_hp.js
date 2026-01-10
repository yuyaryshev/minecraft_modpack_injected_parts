// yy_armor_gives_hp.js
// Leather armor grants bonus max health via attributes

ItemEvents.modification(event => {
  // Leather Helmet: +1 HP
  event.modify('minecraft:leather_helmet', item => {
    item.addAttribute(
      'minecraft:generic.max_health',
      'b6b3e0c1-6a3b-4c1a-9b91-helmet-hp0001',
      1.0,
      'addition'
    )
  })

  // Leather Boots: +2 HP
  event.modify('minecraft:leather_boots', item => {
    item.addAttribute(
      'minecraft:generic.max_health',
      'b6b3e0c1-6a3b-4c1a-9b91-boots-hp0002',
      2.0,
      'addition'
    )
  })

  // Leather Leggings: +3 HP
  event.modify('minecraft:leather_leggings', item => {
    item.addAttribute(
      'minecraft:generic.max_health',
      'b6b3e0c1-6a3b-4c1a-9b91-legs-hp0003',
      3.0,
      'addition'
    )
  })

  // Leather Chestplate: +4 HP
  event.modify('minecraft:leather_chestplate', item => {
    item.addAttribute(
      'minecraft:generic.max_health',
      'b6b3e0c1-6a3b-4c1a-9b91-chest-hp0004',
      4.0,
      'addition'
    )
  })

})
