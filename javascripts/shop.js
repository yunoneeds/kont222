document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput')
    const sortOptions = document.getElementById('sortOptions')
    const productList = document.getElementById('product-grid')
    const products = Array.from(productList.children)

    // Поиск
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase()
        products.forEach((product) => {
        const name = product.getAttribute('data-name').toLowerCase()
        product.style.display = name.includes(searchTerm) ? '' : 'none'
        })
    })

    // Сортировка
    sortOptions.addEventListener('change', () => {
        const sortValue = sortOptions.value
        let sortedProducts

        if (sortValue === 'name') {
        sortedProducts = products.sort((a, b) => {
            const nameA = a.getAttribute('data-name').toLowerCase()
            const nameB = b.getAttribute('data-name').toLowerCase()
            return nameA.localeCompare(nameB)
        })
        } else if (sortValue === 'priceAsc') {
        sortedProducts = products.sort((a, b) => {
            return a.getAttribute('data-price') - b.getAttribute('data-price')
        })
        } else if (sortValue === 'priceDesc') {
        sortedProducts = products.sort((a, b) => {
            return b.getAttribute('data-price') - a.getAttribute('data-price')
        })
        }

        productList.innerHTML = ''
        sortedProducts.forEach((product) => productList.appendChild(product))
    })
})

document.getElementById('shopForm').addEventListener('submit', function (e) {
    e.preventDefault()
    const selectedProducts = []
    const checkboxes = document.querySelectorAll(
    'input[type=checkbox]:checked'
    )

    checkboxes.forEach((checkbox) => {
    const productName = checkbox.value
    const quantityInput =
        checkbox.parentElement.querySelector('input[type=number]')
    const quantity = quantityInput ? quantityInput.value : 1

    selectedProducts.push({
        name: productName,
        quantity: parseInt(quantity)
    })
    })

    if (selectedProducts.length > 0) {
    const firstProductName = selectedProducts[0].name
    const searchQuery = encodeURIComponent(firstProductName)
    const bingUrl = `https://www.bing.com/search?q=${searchQuery}`

    window.location.href = bingUrl
    } else {
    alert('Пожалуйста, выберите хотя бы один товар!')
    }
})