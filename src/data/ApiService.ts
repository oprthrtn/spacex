import Launch from "../domain/models/Launch";
import AxiosNetwork from "./Network";

interface Network {
    getAllLaunches(): Promise<Launch[]>
}

export default class ApiService extends AxiosNetwork implements Network {

    getAllLaunches(): Promise<Launch[]> {
        return this.request('/launches', 'GET')
    }

}