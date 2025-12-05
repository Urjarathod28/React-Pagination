import Product from "../models/productModel.js"

export const insertDummyProducts = async (req, res) => {
  try {
    let products = [];

    for (let i = 1; i <= 200; i++) {
      products.push({
        title: `Product ${i}`,
        description: `This is product number ${i}`,
        price: Math.floor(Math.random() * 1000) + 100,
      });
    }

    await Product.insertMany(products);

    res.json({ message: "200 Dummy Products Inserted Successfully!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
