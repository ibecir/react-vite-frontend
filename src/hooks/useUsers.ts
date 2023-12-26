import { useQuery } from "react-query";
import { UserService } from "../services";
import { toast } from 'react-toastify';

const useUsers = () => {
    return useQuery('users', () => UserService.getUsers(),
        {
            refetchOnWindowFocus: false,
            retry: false,
            onError: (error) => {
                toast.error(`Something went wrong: ${error?.message}`);
            }
        });
}

export default useUsers;