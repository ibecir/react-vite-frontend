import { useState } from "react";
import Search from "../Search";
import Button from "../Button";

const allUsers = ["becir", "aldin", "john", "ajnur", "varijantas"];

function shuffle(items: string[]): string[] {
  const temp = [...items];
  return temp.sort(() => Math.random() - 0.5);
}

const UsersCallback = () => {
  const [users, setUsers] = useState(allUsers);

  const handleSearch = (text: string) => {
    const filteredUsers = allUsers.filter((user) => user.includes(text));

    setUsers(filteredUsers);
  };
  return (
    <div>
      <Search onChange={handleSearch} />
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
      <Button
        onClick={() => {
          const temp = shuffle(allUsers);
          console.log("USERS ARE ", temp);
          setUsers(temp);
        }}
      >
        Shuffle me
      </Button>
    </div>
  );
};

export default UsersCallback;
