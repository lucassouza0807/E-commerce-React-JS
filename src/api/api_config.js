const config = {
    baseURL: "http://localhost:8000",
    timeout: 3000,
    headers: {
        "Api-Secret": "4f3c6a0b-522e-442e-94f7-3d413956050e",
        "Access-Control-Allow-Origin": "http://localhost:8000",
        "Access-Control-Allow-Methods": "PUT, POST, DELETE, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Accept, Authorization, Content-Type",
    },
}

export const { baseURL, timeout, headers } = config

