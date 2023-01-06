import Launch from "../domain/models/Launch";
import { Rocket } from "../domain/models/Rocket";
import { Starlink } from "../domain/models/Starlink";
import AxiosNetwork from "./Network";

interface Network {
    getAllLaunches(): Promise<Launch[]>
}

export default class ApiService extends AxiosNetwork implements Network {

    getAllLaunches(): Promise<Launch[]> {
        return this.request('/launches', 'GET')
    }

    getAllStarlinks(): Promise<Starlink[]> {
        return this.request('/starlink', 'GET')
    }

    getAllRockets(): Promise<Rocket[]> {
        return this.request('/rockets', 'GET')
    }

    getRocket(rocketId: string): Promise<Rocket> {
        return this.request(`/rockets/${rocketId}`, 'GET')
    }
}