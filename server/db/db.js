const dataBase = {
  products: [
    {
      id: "1",
      name: "product1",
      purchPrice: 200,
      salePrice: 300,
      categoryId: 1
    },
    {
      id: "2",
      name: "product2",
      purchPrice: 200,
      salePrice: 400,
      categoryId: 2
    },
    {
      id: "3",
      name: "product3",
      purchPrice: 300,
      salePrice: 500,
      categoryId: 2
    },
    {
      id: "4",
      name: "product4",
      purchPrice: 400,
      salePrice: 600,
      categoryId: 1
    }
  ],
  categories: [
    { name: "Category1", id: 1 },
    { name: "Category2", id: 2 },
    { name: "Category3", id: 3 },
    { name: "Category4", id: 4 },
    { name: "Without Category", id: 5 }
  ]
};

export default dataBase;
