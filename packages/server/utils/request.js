// import axios from "axios";
const axios = require("axios");
const https = require("https");
const createAxiosByinterceptors = (config) => {
    const { BASE_URL } = process.env;
    instance = axios.create({
        baseURL: BASE_URL,
        timeout: 1000*30,
        withCredentials: true,
        httpsAgent: new https.Agent({  
            rejectUnauthorized: false
        }),
        ...config
    });

    instance.interceptors.request.use(
        function (config) {
            const headers = {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                'X-Thermeon-Request-ID': 'no-request-id',
                'X-Thermeon-Perms': { "Username": "WEB" }
            }
            config.headers = { ...headers, ...config.headers };
            return config;
        },
        function (error) {
            return Promise.reject(error);
        }
    );

    instance.interceptors.response.use(
        function (response) {
            const { status, data, headers } = response;
            let checkStatus = status.toString();
            if (checkStatus.startsWith("2") || checkStatus.startsWith("3")) return data;
            else if (status === 401) {
                console.log("Req error 401");
                return Promise.reject(response.data);
            } else if (status === 404) {
                console.log("Req error 404");
                return Promise.reject(response.data);
            } else {
                console.log("Req error", status);
                return Promise.reject(response.data);
            }
        },
        function (error) {
            console.log("error-response:", error);
            // console.log("error-config:", error.config);
            // console.log("error-request:", error.request);
            return Promise.reject(error?.response?.data || "server error");
        }
    );

    return instance;
}

module.exports = createAxiosByinterceptors
