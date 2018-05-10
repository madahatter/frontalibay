
function login(email, password, cb) {
    return fetch('/login', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password
        })
    })
        .then(res => res.json())
}

function register(email, password, name) {
    return fetch('/registerUser', {
        method: 'POST',
        body: JSON.stringify({
            email,
            password,
            name
        })
    })
        .then(res => res.json())
}

function addToCart(itemId, email) {
    return fetch('/addToCart', {
        method: 'POST',
        body: JSON.stringify({
            itemId,
            email
        })
    })
    .then(res => res.json())
}
function featuredImages() {
    return fetch('/featuredImages', {
        method: 'GET'
    })
        .then(res => res.json())
}

function search(searchTerm, opts = {}) {
    let terms = searchTerm.split(" ");

    console.log(`/search?terms=${terms}&category=${opts.category ? opts.category : false}`)
    return fetch(`/search?terms=${terms}&category=${opts.category ? opts.category : false}`)
        .then(res => res.json())
}

function createListing(email, title, description, image, category) {
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
        .then(res => res.json())
}

function buy(email, itemId) {
    return fetch('/buy', {
        method: 'POST',
        body: JSON.stringify({
            email,
            itemId
        })
    })
        .then(res => res.json())
}

// function addToCart(email, itemId) {
//     return fetch('/addToCart', {
//         method: 'POST',
//         body: JSON.stringify({
//             email,
//             itemId
//         })
//     })
//         .then(res => res.json())
// }

function removeFromCart(email, itemId) {
    return fetch('/addToCart', {
        method: 'POST',
        body: JSON.stringify({
            email,
            itemId
        })
    })
        .then(res => res.json())
}
export { login, register, createListing, featuredImages, buy, addToCart, removeFromCart, search, };
