import appAxios from "./appAxios";
import { User } from "../utils/types";
import axios from "axios";
import { BASE_URL } from "../constants";

const getUsers = async (): Promise<User[]> => {
    return appAxios.get(`/users/`).then(
        (response) => {
            const data = response.data;
            const users: User[] = [];

            data.map((user: User) => {
                users?.push({
                    userId: user.userId,
                    userType: user.userType,
                    name: user.name,
                    email: user.email,
                    username: user.username,
                    creationDate: user.creationDate,
                    password: "NEMAGA"
                });
            });
            return users;
        });
}

const addUser = async (user: User): Promise<User> => {
    return axios.post(`${BASE_URL}/api/auth/register`, user).then(
        (response) => {
            const data = response.data;
            console.log("USER ADDED IS ", data);

            return data;
        });
}

const updateUser = async (data: User) => {
    return appAxios
        .put(`${BASE_URL}/users/update/${data.userId}`, data)
        .then((response) => response.data);
};

const deleteUser = async (id: string) => {
    return appAxios.delete(`${BASE_URL}/users/delete/${id}`).then(response => {
        const { data } = response;
        return data;
    });
};

export default { getUsers, addUser, updateUser, deleteUser };