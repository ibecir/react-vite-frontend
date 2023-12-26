import { useMutation, useQueryClient } from 'react-query';
import { UserService } from '../services';
import { User } from '../utils/types';

const useCreateUser = () => {
    const queryClient = useQueryClient();
    return useMutation((data: User) => UserService.addUser(data), {
        onSuccess: () => {
            queryClient.invalidateQueries('users');
        },
    });
};

export default useCreateUser;
