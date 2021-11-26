const products = [{
    id: 'RedShoe',
    description: 'Red Shoe',
    reviews: [{
        comment: 'Nice Shoes',
        rating: 4
    }],
    price: 1300.44
}]

function getAllProducts() {
    return products;
}

function getProductsByPrice(minPrice, maxPrice) {
    return products.filter((product) => {
        return product.price >= minPrice && product.price <= maxPrice
    })
}

function getProductById(id) {
    return products.find((product) => {
        return product.id === id;
    })
}

function addNewProduct(id, description, price) {
    const newProduct = {
        id,
        description,
        price,
        reviews: []
    };

    products.push(newProduct);
    return newProduct;
}

function addNewProductReview(id, comment, rating) {

    const matchedProduct = getProductById(id);

    if (matchedProduct) {
        const newProductReview = {
            comment,
            rating
        };

        matchedProduct.reviews.push(newProductReview);
        return newProductReview;
    }
}

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductById,
    addNewProduct,
    addNewProductReview
}