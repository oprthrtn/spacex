import axios, { AxiosInstance, AxiosRequestConfig } from "axios"

export type HTTPMethod = 'GET'

export default class AxiosNetwork {
    private instance: AxiosInstance;

    constructor() {
        this.instance = axios.create({
            baseURL: process.env.REACT_APP_API_HOST
        })
    }

    request<T>(url: string, method: HTTPMethod, parameters: Object | null = null): Promise<T> {

        let config: AxiosRequestConfig = {
            url: url,
            method: method
        };

        if (method === 'GET') {
            config.params = parameters;
        }

        return this.instance.request(config).then(value => {
            return value.data
        })
    }
}