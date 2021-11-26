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

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductById
}