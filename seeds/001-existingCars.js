
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: "2FMZA51665BA05533", Make: "Ford", Model: "2005 Freestar", Mileage: "63300", Title: "Clean"},
        {VIN: "1GTGK29U5XE550656", Make: "GMC", Model: "1999 Sierra 2500", Mileage: "147100"},
        {VIN: "5FNRL18613B046732", Make: "Honda", Model: "2003 Odyssey", Mileage: "74910", Title: "Clean"},
        {VIN: "JH4KA4640JC021212", Make: "Acura", Model: "1988 Legend", Mileage: "113000", Title: "Salvage"},
        {VIN: "WBAWC73578E067076", Make: "BMW", Model: "2008 3 Series", Mileage: "105029"},
        {VIN: "1G8AY12P84Z202013", Make: "Saturn", Model: "2004 Ion Red Line", Mileage: "168164"}
      ]);
    });
};
