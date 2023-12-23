import appAxios from "./appAxios";
import { User } from "../utils/types";

const getUsers = async (): Promise<User[]> => {
    return appAxios.get(`/users/`).then(
        (response) => {
            const data = response.data;
            console.log("USERS ARE ", data);

            return data;
        });
}

export default { getUsers };