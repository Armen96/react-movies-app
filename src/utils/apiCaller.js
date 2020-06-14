export default function apiCaller(method, path, data = null) {
    return fetch(process.env.REACT_APP_JSON_PLACEHOLDER + path, {
        method,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': 'true'
        },
        body: data ? JSON.stringify(data) : null
    }).then(res => res.json());
}
