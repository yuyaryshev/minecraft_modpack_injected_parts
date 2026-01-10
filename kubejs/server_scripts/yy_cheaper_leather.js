// yy_cheaper_leather.js
// Adds more leather drops to animals making leather much more cheaper

ServerEvents.entityLootTables(event => {
  event.modifyEntity('minecraft:pig', table => {
    table.addPool(pool => {
      pool.rolls(1)
      pool.addItem('minecraft:leather', [8, 10])
    })
  });

  event.modifyEntity('minecraft:cow', table => {
    table.addPool(pool => {
      pool.rolls(1)
      pool.addItem('minecraft:leather', [2, 3])
    })
  });

  event.modifyEntity('minecraft:sheep', table => {
    table.addPool(pool => {
      pool.rolls(1)
      pool.addItem('minecraft:leather', [1, 2])
    })
  });

  event.modifyEntity('minecraft:horse', table => {
    table.addPool(pool => {
      pool.rolls(1)
      pool.addItem('minecraft:leather', [6, 7])
    })
  });
});