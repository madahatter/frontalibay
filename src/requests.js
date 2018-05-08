
function login(email, password) {
    return fetch('/login', {
        method: 'POST', 
        body: JSON.stringify({
            email,
            password
        })
    })
    .then(e => e.json())
}

function register(email, password, name) {
    return fetch('/register', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password,
            name
        })
    })
    .then(e => e.json())
}

function featuredImages() {
    return fetch('/featuredImages', {
        method: 'GET'
    })
    .then(e => e.json())
}

function search(searchTerm) {
    return fetch('/search?term=' + searchTerm)
    .then(e => e.json())
}

function createListing(email, title, descripton, image, category) {
    return fetch('/createListing', {
        method: 'POST', 
        body: JSON.stringify({
            email,
            title,
            description, 
            image,
            category
        })
    })
    .then(e => e.json())
}

function buy(email, itemId) {
    return fetch('/buy', {
        method: 'POST', 
        body: JSON.stringify({
            email,
            itemId
        })
    })
    .then(e => e.json())
}

function addToCart(email, itemId) {
    return fetch('/addToCart', {
        method: 'POST', 
        body: JSON.stringify({
            email,
            itemId
        })
    })
    .then(e => e.json())
}

function removeFromCart(email, itemId) {
    return fetch('/addToCart', {
        method: 'POST', 
        body: JSON.stringify({
            email,
            itemId
        })
    })
    .then(e => e.json())
}

export { login, register, createListing, featuredImages, createListing, buy, addToCart, removeFromCart };