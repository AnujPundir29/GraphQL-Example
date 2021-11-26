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

module.exports = {
    getAllProducts
}