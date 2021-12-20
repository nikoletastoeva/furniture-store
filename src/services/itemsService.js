export const getAll = () => {
   return fetch('http://localhost:3030/jsonstore/our-products')
      .then(res => res.json())
}
export const getCustomProducts = async () => {
   let res = await fetch('http://localhost:3030/data/custom-products')
   let result = await res.json()
   if (res.ok) {
      return result
   }else{
      return []
   }

}
export const getOne = (id) => {
   return fetch(`http://localhost:3030/jsonstore/our-products/${id}`)
      .then(res => res.json())
}

export const getOneCustom = (id) => {
   return fetch(`http://localhost:3030/data/custom-products/${id}`)
      .then(res => res.json())
}

export const create = async (data, token) => {
   let response = await fetch('http://localhost:3030/data/custom-products', {
      method: 'POST',
      headers: {
         'content-type': 'aplication/json',
         'X-Authorization': token
      },
      body: JSON.stringify({ ...data, hearts: [] })
   })

   let result = await response.json()

   return result
}

export const like = (productId, productData, token) => {
   return fetch(`http://localhost:3030/data/custom-products/${productId}`, {
      method: "PUT",
      headers: {
         'content-type': 'aplication/json',
         'X-Authorization': token
      },
      body: JSON.stringify(productData)
   })
      .then((res) => {
         console.log(productData);
         res.json()
      })
}

export const edit = async (data, productId, token) => {
   let response = await fetch(`http://localhost:3030/data/custom-products/${productId}`, {
      method: 'PUT',
      headers: {
         'content-type': 'aplication/json',
         'X-Authorization': token
      },
      body: JSON.stringify(data)
   })

   let result = await response.json()

   return result
}

export const deleteProduct = async (productId, token) => {
   let response = await fetch(`http://localhost:3030/data/custom-products/${productId}`, {
      method: 'DELETE',
      headers: {
         'content-type': 'aplication/json',
         'X-Authorization': token
      }
   })

   let result = await response.json()

   return result
}



