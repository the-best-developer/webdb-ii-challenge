
exports.up = (knex) => {
    return knex.schema.createTable('cars', (table) => {
      table.increments();
      table.varchar('VIN', 10).unique();
      table.varchar('Make', 50).notNullable();
      table.varchar('Model', 50).notNullable();
      table.integer('Mileage').notNullable();
      table.varchar('Title', 20);
    });
  };
  
  exports.down = (knex) => {
    return knex.schema.dropTableIfExists('cars');
  };