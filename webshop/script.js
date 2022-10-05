var state = {
    products: [
        {
            id: uuidv4(),
            name: 'Teszt termek 1',
            price: 2500,
            isInStock: true
        },
        {
            id: uuidv4(),
            name: 'Teszt termek 2',
            price: 3500,
            isInStock: false
        },
        {
            id: uuidv4(),
            name: 'Teszt termek 3',
            price: 5500,
            isInStock: true
        }
    ],
    editedId: ''
}

function renderEditProduct(){
    var foundProduct;
    for (const product of state.products) {
        if (product.id === state.editedId) {
            foundProduct = product;
        }
    }
    var editFormHTML = `
    <h3>Termék szerkesztése</h3>
        <form id="update-product" class="p-5">
            <label class="w-100">
                Név:
                <input class="form-control" type="text" name="name">
            </label>
            <label class="w-100">
                Ár:
                <input class="form-control" type="number" name="price" value=${foundProduct.price}>
            </label>
            <label class="w-100">
                Van készleten?
                <input class="form-control" type="checkbox" name="isInStock" ${foundProduct.isInStock ? 'checked' : ''}>
            </label>
            <button class="btn btn-primary" type="submit">Küldés</button>
            </form>
    `;
    document.getElementById('edit-product').innerHTML = editFormHTML;

    document.getElementById('update-product').onsubmit = function(event) {
        event.preventDefault();
        let productName = event.target.elements.name.value;
        let productPrice = Number(event.target.elements.price.value);
        let productIsInStock = event.target.elements.isInStock.checked;
        var id = state.editedId;
        var foundIndex = foundProduct(id);
        state.products[foundIndex].name = productName;
        state.products[foundIndex].price = productPrice;
        state.products[foundIndex].isInStock = productIsInStock;
        renderProducts();
    };
}


function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
  }

function renderProducts() {
    let content =``;
    for (product of state.products) {
        
        content += `<div class=" card m-2 p-2  ${!product.isInStock ? 'bg-danger': ''}">
            <p>${product.name}</p> 
            <p>${product.price}</p> 
            <button class="btn btn-warning float-right edit-product mb-2" data-productid="${product.id}">
                Szerkesztes
            </button>
            <button class="btn btn-danger float-right delete-product" data-productid="${product.id}">
                Torles
            </button>
            
         </div>`;
         
        
    }

    document.getElementById('product-list-component').innerHTML = content;
    for (const editBtn of document.querySelectorAll('.edit-product')) {
        editBtn.onclick = function(event){
            var id = event.target.dataset.productid;
            state.editedId = id;
            renderEditProduct();
        }
    }



    for (const deleteBtn of document.querySelectorAll('.delete-product')){
        deleteBtn.onclick = function(event){
            var id = event.target.dataset.productid;
            var foundIndex = foundProduct(id);
            state.products.splice(foundIndex, 1);
            renderProducts();
        }
    }
}

window.onload = renderProducts;

document.getElementById('create-product').onsubmit = function(event){
    event.preventDefault();
    let productName = event.target.elements.name.value;
    let productPrice = Number(event.target.elements.price.value);
    let productIsInStock = event.target.elements.isInStock.checked;
    //console.log(productName + ' ' + productPrice + ' ' + productIsInStock);

    state.products.push({ 
        id: uuidv4(),
        name: productName, 
        price: productPrice, 
        isInStock: productIsInStock
    });
    renderProducts();
};

function foundProduct(id) {
    var foundIndex;
    for (let index = 0; index < state.products.length; index++) {
        if (state.products[index].id === id) {
            foundIndex = index;
            break;
        }
    }
}
