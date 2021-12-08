export function getAll() {
    return fetch('http://localhost:3030/jsonstore/our-products')
       .then(res => res.json())
 }
 export function getOne(id) {
    return fetch(`http://localhost:3030/jsonstore/our-products/${id}`)
       .then(res => res.json())
 }