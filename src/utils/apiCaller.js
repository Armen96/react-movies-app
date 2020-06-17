export default function apiCaller(method, path, data = null) {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    return fetch(proxyUrl + process.env.REACT_APP_JSON_PLACEHOLDER + path, {
        method,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true'
        },
        body: data ? JSON.stringify(data) : null
    }).then(res => res.json());
}
