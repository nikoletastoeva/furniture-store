

let baseUrl = 'http://localhost:3030'

export const login = async (email, password) => {
    let res = await fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    });

    let jsonResult = await res.json();
    console.log(res.ok);

    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }
};

export const register = async (email, password) => {
    let res =  await fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'content-type': 'aplication/json'
        },
        body: JSON.stringify({email, password})
    })
    let jsonResult = await res.json();
    return jsonResult

}