module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("category", [
      {
        category_name: "Electronics",
        subcategories: "Laptops, Mobiles",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Fashion",
        subcategories: "Clothes, Footwear",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Vehicles",
        subcategories: "Cars, Bikes",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        category_name: "Sports",
        subcategories: "Cricket_Bat, Football",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],{});
  },

  down: async (queryInterface, Sequelize) => {
    //await queryInterface.bulkDelete("categories", null, {});
  },
};

