// Create the product inventory array
let products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Access product information
function logFirstProduct() {
    console.log(products[0]);
}

// Update product information
function updateProductName(position, newName) {
    products[position] = newName;
}

// Remove a product
function removeLastProduct() {
    products.pop();
}
//Add a new product
function addProduct(ProductName){
  products.push(ProductName);
}

// Export the necessary parts for testing
module.exports = {
    logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
    addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
    updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
    removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
    products
};
