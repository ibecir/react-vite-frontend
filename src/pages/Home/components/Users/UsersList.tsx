import { useEffect, useState } from "react";
import { User } from "../../../../utils/types";
import { UserService } from "../../../../services";
import { ToastContainer, toast } from "react-toastify";

const UsersList = () => {
  const [users, setUsers] = useState<User[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    UserService.getUsers()
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }, []);
  return (
    <div>
      <ToastContainer />
      {isLoading && <div>Loading...</div>}

      {!isLoading && (
        <div>
          <div className="list-group">
            {users?.map((user) => {
              return (
                <a
                  href="#"
                  className="list-group-item list-group-item-action"
                  aria-current="true"
                  key={user.userId}
                >
                  <div className="d-flex w-100 justify-content-between">
                    <h2 className="mb-1">{user?.username}</h2>
                    <small>{user?.creationDate}</small>
                  </div>
                  <p className="mb-1">{user?.email}</p>
                  <small>{user?.email + " - " + user?.userType}</small>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersList;
