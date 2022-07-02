const deleteProductButtonElements = document.querySelectorAll('.product-item button')

async function deleteProduct(event) {
    const buttontElement = event.target;
    const productId = buttontElement.dataset.productid;
    const csrfToken = buttontElement.dataset.csrftoken


    const response = await fetch('/admin/products/'+ productId + "?_csrf=" + csrfToken , {
        method: 'DELETE',
    })

    if(!response.ok){
        alert('something went wrong')
        return;
    }

    buttontElement.parentElement.parentElement.parentElement.parentElement.remove()

}

for(const deleteProductButtonElement of deleteProductButtonElements) {
    deleteProductButtonElement.addEventListener('click', deleteProduct)
}