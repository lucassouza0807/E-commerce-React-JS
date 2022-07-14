export const config = {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    timeout: 3000,
    headers: {
        "Api-Secret": process.env.REACT_APP_API_SECRET_KEY,
        "Access-Control-Allow-Origin": process.env.REACT_APP_API_BASE_URL,
        "Access-Control-Allow-Methods": "PUT, POST, DELETE, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Accept, Authorization, Content-Type",
    },
}

console.log(config);

export const { baseURL, timeout, headers} = config
