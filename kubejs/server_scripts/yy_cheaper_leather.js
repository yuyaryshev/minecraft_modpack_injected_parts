// yy_cheaper_leather.js
// Adds more leather drops to animals making leather much more cheaper


ServerEvents.entityLootTables(event => {
  event.modifyEntity('minecraft:pig', table => {
    table.addPool(pool => {
      pool.rolls = 1
      pool.addItem('minecraft:leather');
      pool.addItem('minecraft:leather');
      pool.addItem('minecraft:leather');

      pool.addItem('minecraft:leather');
      pool.addItem('minecraft:leather');
      pool.addItem('minecraft:leather');

      pool.addItem('minecraft:leather');
      pool.addItem('minecraft:leather');
      pool.addItem('minecraft:leather');
	  })
  });

  event.modifyEntity('minecraft:cow', table => {
    table.addPool(pool => {
      pool.rolls = 1
      pool.addItem('minecraft:leather');
      pool.addItem('minecraft:leather');
      pool.addItem('minecraft:leather');
    })
  });

  event.modifyEntity('minecraft:sheep', table => {
    table.addPool(pool => {
      pool.rolls = 1
      pool.addItem('minecraft:leather');
      pool.addItem('minecraft:leather');
    })
  });

  event.modifyEntity('minecraft:horse', table => {
    table.addPool(pool => {
      pool.rolls = 1
      pool.addItem('minecraft:leather');
      pool.addItem('minecraft:leather');
      pool.addItem('minecraft:leather');

      pool.addItem('minecraft:leather');
      pool.addItem('minecraft:leather');
      pool.addItem('minecraft:leather');

      pool.addItem('minecraft:leather');
    })
  });
});
