const orders = [{
    date: '24-11-2021',
    subtotal: 1300.44,
    items: [{
        product: {
            id: 'RedShoe',
            description: 'Red Shoe',
            price: 1300.44
        },
        quantity: 1
    }]
}]

function getAllOrders() {
    return orders;
}

module.exports = {
    getAllOrders
}