

export const like = (productId, userId, product, token) => {
    return fetch('http://localhost:3030/data/hearts', {
        method: 'POST',      
        headers: {
            'content-type': 'aplication/json',
            'X-Authorization': token
        },
        body: JSON.stringify({ userId, productId, product })
    })
}
export const getMyLove = async (userId) => {
    let res = await fetch('http://localhost:3030/data/hearts')

    if (res.ok) {
        let allHearts = await res.json()
        let myLove = allHearts.filter(h => h.userId === userId)
        let productData = myLove.map(p => p.product)
        return productData
    } else {
        return []
    }

}

export const getOneHeart = async (productId, userId) => {
    let res = await fetch('http://localhost:3030/data/hearts')
    if(res.ok){
        
        let allHearts = await res.json()
        let myLove = allHearts.filter(h => h.userId === userId)
        let heart = myLove.find(p => p.productId === productId)
    if(heart){
        return heart._id
    }else{
        return false
    }
    }else{
        return []
    }
    
    
}

export const dislike = async (productId, userId, token) => {
    let heartId = await getOneHeart(productId, userId)
    let res = await fetch(`http://localhost:3030/data/hearts/${heartId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    })
    let result = await res.json()

    return result
}