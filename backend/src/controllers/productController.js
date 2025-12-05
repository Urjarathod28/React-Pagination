import Product from "../models/productModel.js"

export const getProducts = async(req,res)=>{
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 20;
        const skip = (page - 1) * limit;

        const products = await Product.find()
        .skip(skip)
        .limit(limit)
        .sort({ _id:1 }); 

        const total = await Product.countDocuments();

        res.json({
            page,
            limit,
            total,
            totalPages: Math.ceil(total/limit),
            products,
        })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
