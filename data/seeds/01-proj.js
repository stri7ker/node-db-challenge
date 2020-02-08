
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, proj_name: "monday", proj_description: "do this", completed: 0},
        {id: 2, proj_name: "tuesday", proj_description: "do that", completed: 0},
        {id: 3, proj_name: "wednesday", proj_description: "do everything", completed: 0},
      ]);
    });
};
